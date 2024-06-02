import { type Request, type Response, type NextFunction } from "express"

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

// Payment
export type GetConfigResponse = ControllerResponse<{ publishableKey: string }>

export type GetConfig = (
  req: Request,
  res: GetConfigResponse,
  next: NextFunction
) => Promise<GetConfigResponse | void>

export type CreatePaymentResponse = ControllerResponse<{ clientSecret: string }>

export type CreatePayment = (
  req: Request,
  res: CreatePaymentResponse,
  next: NextFunction
) => Promise<CreatePaymentResponse | void>
