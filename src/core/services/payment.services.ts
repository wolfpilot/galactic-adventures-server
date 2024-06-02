import Stripe from "stripe"

// Types
import { type GetConfig, type CreatePayment } from "./types.js"

// Helper
import { ServiceError } from "@helpers/errorHelper.js"

// Setup
const { STRIPE_PUBLIC_KEY = "", STRIPE_SECRET_KEY = "" } = process.env

const stripe = new Stripe(STRIPE_SECRET_KEY)

export const getConfig: GetConfig = async () => {
  return Promise.resolve({
    publishableKey: STRIPE_PUBLIC_KEY,
  })
}

export const createPayment: CreatePayment = async () => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "eur",
      amount: 100,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return Promise.resolve({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Promise.reject(err)
    }

    return Promise.reject(new ServiceError("Unhandled"))
  }
}
