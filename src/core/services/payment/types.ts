// Types
import { ProductType } from "@ts/products.types.js"

export interface IPaymentService {
  getConfig: () => Promise<{
    publishableKey: string | null
  }>

  createIntent: (
    id: number,
    type: ProductType
  ) => Promise<{
    clientSecret: string | null
    amount: number
    currency: string
  }>
}
