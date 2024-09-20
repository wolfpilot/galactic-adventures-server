import type { Request, NextFunction } from "express"

// Types
import type { ControllerResponse } from "../types.js"
import { ProductType } from "@ts/products.types.js"
import type {
  PaymentConfigDTO,
  PaymentIntentCreateDTO,
  PaymentIntentGetDTO,
} from "@services/dtos/payment.dtos.js"

// Payment
export type PaymentGetConfigResponse = ControllerResponse<{
  publishable_key: PaymentConfigDTO | null
}>

export type PaymentGetConfig = (
  req: Request,
  res: PaymentGetConfigResponse,
  next: NextFunction
) => Promise<PaymentGetConfigResponse | void>

// Intent
export type IntentGetRequest = Request<{
  id: string
}>

export type IntentGetResponse = ControllerResponse<{
  paymentIntent: PaymentIntentGetDTO | null
}>

export type IntentGet = (
  req: IntentGetRequest,
  res: IntentGetResponse,
  next: NextFunction
) => Promise<IntentGetResponse | void>

export type IntentCreateRequest = Request<
  unknown,
  unknown,
  {
    productType: ProductType
    productId: string
  }
>
export type IntentCreateResponse = ControllerResponse<{
  paymentIntent: PaymentIntentCreateDTO | null
}>

export type IntentCreate = (
  req: IntentCreateRequest,
  res: IntentCreateResponse,
  next: NextFunction
) => Promise<IntentCreateResponse | void>
