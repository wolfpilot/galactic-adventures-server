// Types
import { ProductType } from "@ts/products.types.js"
import type { PaymentGetConfig, PaymentCreateIntent } from "./types.js"

// Services
import { PaymentService } from "@services/payment/payment.services.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

const paymentService = new PaymentService()

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
    const { clientSecret } = await paymentService.createIntent(
      productId,
      productType
    )

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
