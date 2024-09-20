import type { Stripe } from "stripe"

// Types
import { ProductType } from "@ts/products.types.js"

export interface PaymentConfigDTO {
  publishableKey: string | null
}

export interface PaymentIntentCreateDTO {
  id: Stripe.PaymentIntent["id"]
  client_secret: Stripe.PaymentIntent["client_secret"]
  amount: Stripe.PaymentIntent["amount"]
  currency: Stripe.PaymentIntent["currency"]
}

export interface PaymentIntentGetDTO {
  id: Stripe.PaymentIntent["id"]
  client_secret: Stripe.PaymentIntent["client_secret"]
  status: Stripe.PaymentIntent["status"]
  created: Stripe.PaymentIntent["created"]
  amount: Stripe.PaymentIntent["amount"]
  currency: Stripe.PaymentIntent["currency"]
  payment_method: Stripe.PaymentMethod
  metadata: {
    productId: number
    productType: ProductType
    productName: string
  }
}
