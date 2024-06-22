import Stripe from "stripe"

// Types
import type { PaymentGetConfig, PaymentCreateIntent } from "./types.js"

// Helper
import { ServiceError } from "@helpers/errorHelper.js"

// Services
import { adventuresGetById } from "@services/products/adventures.services.js"
import { ProductType } from "@entities/products/products.entities.js"

// Setup
const { STRIPE_PUBLIC_KEY = "", STRIPE_SECRET_KEY = "" } = process.env

const stripe = new Stripe(STRIPE_SECRET_KEY)

// Utils
export const paymentGetConfig: PaymentGetConfig = async () => {
  return STRIPE_PUBLIC_KEY
    ? Promise.resolve({
        publishableKey: STRIPE_PUBLIC_KEY,
      })
    : Promise.reject({
        publishableKey: null,
      })
}

export const paymentCreateIntent: PaymentCreateIntent = async ({
  productType,
  productId,
}) => {
  try {
    const product =
      productType === ProductType.adventure
        ? await adventuresGetById({ id: productId })
        : null

    if (!product) {
      return Promise.reject(new ServiceError("Unhandled"))
    }

    const paymentIntent = await stripe.paymentIntents.create({
      automatic_payment_methods: {
        enabled: true,
      },
      currency: "eur",
      amount: product.price * 100,
      description: `Payment for ${productType}: ${product.waypoint.name}.`,
      metadata: {
        productId,
        productType,
      },
    })

    return Promise.resolve({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error)
    }

    return Promise.reject(new ServiceError("Unhandled"))
  }
}
