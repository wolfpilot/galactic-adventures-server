// Types
import { ProductType } from "@entities/products/products.entities.js"

export type PaymentGetConfig = () => Promise<{
  publishableKey: string | null
}>

export type PaymentCreateIntent = ({
  productType,
  productId,
}: {
  productType: ProductType
  productId: number
}) => Promise<{
  clientSecret: string | null
}>
