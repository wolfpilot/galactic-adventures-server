// Types
import { ProductType } from "@entities/products/products.entities.js"
import type { PaymentGetConfig, PaymentCreateIntent } from "./types.js"

// Services
import * as paymentServices from "@services/payment/payment.services.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

export const paymentGetConfig: PaymentGetConfig = async (_req, res, next) => {
  try {
    const { publishableKey } = await paymentServices.paymentGetConfig()

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

export const paymentCreateIntent: PaymentCreateIntent = async (
  req,
  res,
  next
) => {
  const { productType, productId } = req.body

  if (
    !productId ||
    !productType ||
    !Object.values(ProductType).includes(productType)
  ) {
    return next(new HttpError("BadRequest"))
  }

  try {
    const { clientSecret } = await paymentServices.paymentCreateIntent({
      productType,
      productId,
    })

    if (!clientSecret) {
      return next(new HttpError("NotFound"))
    }

    return res.status(201).json({
      ok: true,
      data: {
        clientSecret,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}
