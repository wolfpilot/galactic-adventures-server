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

export type IntentCreateRequest = Request<
  unknown,
  unknown,
  {
    productType: ProductType
    productId: string
  }
>
export type IntentCreateResponse = ControllerResponse<{
  clientSecret: string
  amount: number
  currency: string
}>

export type IntentCreate = (
  req: IntentCreateRequest,
  res: IntentCreateResponse,
  next: NextFunction
) => Promise<IntentCreateResponse | void>
