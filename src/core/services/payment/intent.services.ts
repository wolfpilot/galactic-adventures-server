// Types
import { ProductType } from "@ts/products.types.js"
import type { IntentService } from "./types.js"

// Stripe
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
      description: JSON.stringify({
        product: {
          id,
          type,
          name: product.waypoint?.name,
        },
      }),
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

  async getIntent(id: string) {
    const paymentIntent = await stripe.paymentIntents.retrieve(id, {
      expand: ["payment_method"],
    })

    if (!paymentIntent) {
      return Promise.reject(new ServiceError("NotFound"))
    }

    return Promise.resolve({
      paymentIntent,
    })
  }
}
