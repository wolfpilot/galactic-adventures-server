import type { Request, NextFunction } from "express"

// Types
import type { ControllerResponse } from "../types.js"
import { ProductType } from "@ts/products.types.js"

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
    productId: string
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
