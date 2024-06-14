import Stripe from "stripe"

// Types
import { type PaymentGetConfig, type PaymentCreateIntent } from "./types.js"

// Helper
import { ServiceError } from "@helpers/errorHelper.js"

// Setup
const { STRIPE_PUBLIC_KEY = "", STRIPE_SECRET_KEY = "" } = process.env

const stripe = new Stripe(STRIPE_SECRET_KEY)

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
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "eur",
      amount: 100,
      metadata: {
        productId,
        productType,
      },
      automatic_payment_methods: {
        enabled: true,
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
