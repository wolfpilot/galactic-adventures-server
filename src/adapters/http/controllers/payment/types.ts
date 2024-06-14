import { type Request, type Response, type NextFunction } from "express"

// Types
import { ProductType } from "@entities/products/products.entities.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

// Base
export type ControllerError = HttpError

export interface ControllerSuccess<T = void> {
  ok: boolean
  message?: string
  data?: T
}

export type ControllerResponse<T = void> = Response<
  ControllerSuccess<T> | ControllerError
>

// Functions
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
