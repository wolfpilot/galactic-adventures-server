// Types
import { type GetConfig, type CreatePayment } from "./types.js"

// Services
import * as paymentServices from "@services/payment.services.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

export const getConfig: GetConfig = async (_req, res, next) => {
  try {
    const { publishableKey } = await paymentServices.getConfig()

    if (!publishableKey) {
      return next(new HttpError("NotFound"))
    }

    return res.status(200).json({
      ok: true,
      data: {
        publishableKey,
      },
    })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return next(err)
    }

    next(new HttpError("InternalServerError"))
  }
}

export const createPayment: CreatePayment = async (_req, res, next) => {
  try {
    const { clientSecret } = await paymentServices.createPayment()

    if (!clientSecret) {
      return next(new HttpError("NotFound"))
    }

    return res.status(201).json({
      ok: true,
      data: {
        clientSecret,
      },
    })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return next(err)
    }

    next(new HttpError("InternalServerError"))
  }
}
