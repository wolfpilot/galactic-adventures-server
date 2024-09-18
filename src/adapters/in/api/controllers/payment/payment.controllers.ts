// Types
import type { PaymentGetConfig } from "./types.js"

// Services
import { PaymentServiceImpl } from "@services/payment/payment.services.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

const paymentService = new PaymentServiceImpl()

export const paymentGetConfig: PaymentGetConfig = async (_req, res, next) => {
  try {
    const { publishableKey } = await paymentService.getConfig()

    if (!publishableKey) {
      return next(new HttpError("NotFound"))
    }

    return res.status(200).json({
      ok: true,
      data: {
        publishableKey,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}
