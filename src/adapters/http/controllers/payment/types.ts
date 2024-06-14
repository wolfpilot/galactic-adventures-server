import { type Request, type NextFunction } from "express"

// Types
import { type ControllerResponse } from "../types.js"
import { ProductType } from "@entities/products/products.entities.js"

export type PaymentGetConfigResponse = ControllerResponse<{
  publishableKey: string
}>

export type PaymentGetConfig = (
  req: Request,
  res: PaymentGetConfigResponse,
  next: NextFunction
) => Promise<PaymentGetConfigResponse | void>

export type PaymentCreateIntentRequest = Request<
  unknown,
  unknown,
  {
    productType: ProductType
    productId: number
  }
>
export type PaymentCreateIntentResponse = ControllerResponse<{
  clientSecret: string
}>

export type PaymentCreateIntent = (
  req: PaymentCreateIntentRequest,
  res: PaymentCreateIntentResponse,
  next: NextFunction
) => Promise<PaymentCreateIntentResponse | void>
