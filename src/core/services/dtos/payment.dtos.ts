import type { Stripe } from "stripe"

// Types
import { ProductType } from "@ts/products.types.js"

// Config
export type PaymentConfigDTO = string | null

// Create
export type PaymentIntentCreateDTO = Pick<
  Stripe.PaymentIntent,
  "id" | "client_secret" | "amount" | "currency"
>

// Get
export type PaymentIntentGetMethodDTO = Pick<
  Stripe.PaymentMethod,
  "id" | "created" | "type" | "livemode" | "billing_details" | "ideal" | "card"
>

export interface PaymentIntentGetMetadataDTO {
  product_id: number
  product_type: ProductType
  product_name: string | null
}

export type PaymentIntentGetDTO = Pick<
  Stripe.PaymentIntent,
  "id" | "client_secret" | "status" | "created" | "amount" | "currency"
> & {
  payment_method: PaymentIntentGetMethodDTO | null
  metadata: PaymentIntentGetMetadataDTO
}
