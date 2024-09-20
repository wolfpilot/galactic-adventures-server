// Types
import type { PaymentGetConfig } from "./types.js"

// Services
import { PaymentServiceImpl } from "@services/payment/payment.services.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

const paymentService = new PaymentServiceImpl()

export const paymentGetConfig: PaymentGetConfig = async (_req, res, next) => {
  try {
    const publishable_key = await paymentService.getConfig()

    if (!publishable_key) {
      return next(new HttpError("NotFound"))
    }

    return res.status(200).json({
      ok: true,
      data: {
        publishable_key,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}
