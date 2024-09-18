// Types
import { ProductType } from "@ts/products.types.js"

export interface PaymentService {
  getConfig: () => Promise<{
    publishableKey: string | null
  }>
}

export interface IntentService {
  createIntent: (
    id: number,
    type: ProductType
  ) => Promise<{
    clientSecret: string | null
    amount: number
    currency: string
  }>
}
