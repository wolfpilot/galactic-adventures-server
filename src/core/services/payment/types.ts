// Types
import { ProductType } from "@ts/products.types.js"
import type {
  PaymentConfigDTO,
  PaymentIntentCreateDTO,
  PaymentIntentGetDTO,
} from "@services/dtos/payment.dtos.js"

export interface PaymentService {
  getConfig: () => Promise<PaymentConfigDTO>
}

export interface IntentService {
  createIntent: (
    productId: number,
    productType: ProductType
  ) => Promise<PaymentIntentCreateDTO>
  getIntent: (id: string) => Promise<PaymentIntentGetDTO>
}
