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
        productId,
        productType,
        productName: product.waypoint?.name || null,
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

  async getIntent(id: string) {
    const paymentIntent = await stripe.paymentIntents.retrieve(id, {
      expand: ["payment_method"],
    })

    if (!paymentIntent) {
      return Promise.reject(new ServiceError("NotFound"))
    }

    // Parse data
    const payload = {
      id: paymentIntent.id,
      client_secret: paymentIntent.client_secret,
      status: paymentIntent.status,
      created: paymentIntent.created,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      payment_method: paymentIntent.payment_method,
      metadata: paymentIntent.metadata,
    } as unknown as PaymentIntentGetDTO

    return Promise.resolve(payload)
  }
}
