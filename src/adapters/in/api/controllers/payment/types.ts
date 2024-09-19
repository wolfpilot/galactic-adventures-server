import type { Request, NextFunction } from "express"
import type { Stripe } from "stripe"

// Types
import type { ControllerResponse } from "../types.js"
import { ProductType } from "@ts/products.types.js"

// Payment
export type PaymentGetConfigResponse = ControllerResponse<{
  publishableKey: string
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
  paymentIntent: Stripe.PaymentIntent | null
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
  clientSecret: string
  amount: number
  currency: string
}>

export type IntentCreate = (
  req: IntentCreateRequest,
  res: IntentCreateResponse,
  next: NextFunction
) => Promise<IntentCreateResponse | void>
