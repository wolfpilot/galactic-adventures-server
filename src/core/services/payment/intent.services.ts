// Types
import { ProductType } from "@ts/products.types.js"
import type { IntentService } from "./types.js"
import type { PaymentIntentGetDTO } from "@services/dtos/payment.dtos.js"

// Constants
import {
  STRIPE_DEFAULT_CURRENCY,
  STRIPE_AMOUNT_MULTIPLIER,
} from "@constants/payment/payment.constants.js"

// Adapters
import stripe from "@payment/stripeClient.js"

// Ports
import type { AdventuresRepositoryPort } from "@ports/adventures.ports.js"

// Repositories
import { AdventuresRepository } from "@database/repositories/adventures.repositories.js"

// Helpers
import { ServiceError } from "@helpers/errorHelper.js"

export class IntentServiceImpl implements IntentService {
  private adventuresRepository: AdventuresRepositoryPort

  constructor() {
    this.adventuresRepository = new AdventuresRepository()
  }

  async createIntent(productId: number, productType: ProductType) {
    const product =
      productType === ProductType.adventure
        ? await this.adventuresRepository.findWithWaypointById(productId)
        : null

    if (!product) {
      return Promise.reject(new ServiceError("NotFound"))
    }

    const paymentIntent = await stripe.paymentIntents.create({
      automatic_payment_methods: {
        enabled: true,
      },
      currency: STRIPE_DEFAULT_CURRENCY,
      amount: product.price_sb * STRIPE_AMOUNT_MULTIPLIER,
      metadata: {
        product_id: productId,
        product_type: productType,
        product_name: product.waypoint?.name || null,
      },
    })

    // Parse data
    const payload = {
      id: paymentIntent.id,
      client_secret: paymentIntent.client_secret,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    }

    return Promise.resolve(payload)
  }

  // !: Try / catch and test with bad IDs. Should not throw 500, but 400 bad request?
  async getIntent(id: string) {
    const paymentIntent = await stripe.paymentIntents.retrieve(id, {
      expand: ["payment_method"],
    })

    if (!paymentIntent?.payment_method) {
      return Promise.reject(new ServiceError("NotFound"))
    }

    if (typeof paymentIntent.payment_method === "string") {
      return Promise.reject(new ServiceError("Unhandled"))
    }

    // Parse data
    const payload = {
      id: paymentIntent.id,
      client_secret: paymentIntent.client_secret,
      status: paymentIntent.status,
      created: paymentIntent.created,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      payment_method: {
        id: paymentIntent.payment_method.id,
        created: paymentIntent.payment_method.created,
        type: paymentIntent.payment_method.type,
        livemode: paymentIntent.payment_method.livemode,
        billing_details: paymentIntent.payment_method.billing_details,
        ideal: paymentIntent.payment_method.ideal,
        card: paymentIntent.payment_method.card,
      },
      metadata: paymentIntent.metadata,
    } as unknown as PaymentIntentGetDTO

    return Promise.resolve(payload)
  }
}
