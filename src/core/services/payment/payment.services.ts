// Types
import { ProductType } from "@ts/products.types.js"
import type { IPaymentService } from "./types.js"

// Stripe
import stripe from "@payment/stripeClient.js"

// Ports
import type { AdventuresRepositoryPort } from "@ports/adventures.ports.js"

// Repositories
import { AdventuresRepository } from "@database/repositories/adventures.repositories.js"

// Helpers
import { ServiceError } from "@helpers/errorHelper.js"

// Setup
const { STRIPE_PUBLIC_KEY = "" } = process.env

export class PaymentService implements IPaymentService {
  private adventuresRepository: AdventuresRepositoryPort

  constructor() {
    this.adventuresRepository = new AdventuresRepository()
  }

  getConfig() {
    return STRIPE_PUBLIC_KEY
      ? Promise.resolve({
          publishableKey: STRIPE_PUBLIC_KEY,
        })
      : Promise.reject(new ServiceError("Unhandled"))
  }

  async createIntent(id: number, type: ProductType) {
    const product =
      type === ProductType.adventure
        ? await this.adventuresRepository.findWithWaypointById(id)
        : null

    if (!product) {
      return Promise.reject(new ServiceError("NotFound"))
    }

    const paymentIntent = await stripe.paymentIntents.create({
      automatic_payment_methods: {
        enabled: true,
      },
      currency: "eur",
      amount: product.price_sb * 100,
      description: `Payment for ${type}: ${product.id}.`,
      metadata: {
        id,
        type,
      },
    })

    return Promise.resolve({
      clientSecret: paymentIntent.client_secret,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    })
  }
}
