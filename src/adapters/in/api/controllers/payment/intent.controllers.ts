// Types
import { ProductType } from "@ts/products.types.js"
import type { IntentCreate, IntentGet } from "./types.js"

// Services
import { IntentServiceImpl } from "@services/payment/intent.services.js"

// Helpers
import { HttpError, ServiceError } from "@helpers/errorHelper.js"

const intentService = new IntentServiceImpl()

export const intentCreate: IntentCreate = async (req, res, next) => {
  const { productType, productId } = req.body

  const parsedProductId = parseInt(productId, 10)

  if (!Object.values(ProductType).includes(productType)) {
    return next(new HttpError("BadRequest"))
  }

  try {
    const { clientSecret, amount, currency } = await intentService.createIntent(
      parsedProductId,
      productType
    )

    if (!clientSecret) {
      return next(new HttpError("NotFound"))
    }

    return res.status(201).json({
      ok: true,
      data: {
        clientSecret,
        amount,
        currency,
      },
    })
  } catch (error: unknown) {
    if (error instanceof ServiceError && error.cause === "NotFound") {
      return next(new HttpError("NotFound"))
    } else if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}

export const intentGet: IntentGet = async (req, res, next) => {
  const { id } = req.params

  if (!id) {
    return next(new HttpError("BadRequest"))
  }

  try {
    const data = await intentService.getIntent(id)

    if (!data) {
      return next(new HttpError("NotFound"))
    }

    return res.status(201).json({
      ok: true,
      data,
    })
  } catch (error: unknown) {
    if (error instanceof ServiceError && error.cause === "NotFound") {
      return next(new HttpError("NotFound"))
    } else if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}
