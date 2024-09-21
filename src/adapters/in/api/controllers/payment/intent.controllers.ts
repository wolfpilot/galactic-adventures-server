import Stripe from "stripe"

// Types
import { ProductType } from "@ts/products.types.js"
import type { IntentCreate, IntentGet } from "./types.js"

// Services
import { IntentServiceImpl } from "@services/payment/intent.services.js"

// Helpers
import {
  HttpError,
  ServiceError,
  parseStripeError,
} from "@helpers/error.helpers.js"

const intentService = new IntentServiceImpl()

export const intentCreate: IntentCreate = async (req, res, next) => {
  const { productType, productId } = req.body

  const parsedProductId = parseInt(productId, 10)

  if (!Object.values(ProductType).includes(productType)) {
    return next(new HttpError("BadRequest"))
  }

  try {
    const paymentIntent = await intentService.createIntent(
      parsedProductId,
      productType
    )

    if (!paymentIntent) {
      return next(new HttpError("NotFound"))
    }

    return res.status(201).json({
      ok: true,
      data: {
        paymentIntent,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Stripe.errors.StripeError) {
      return next(parseStripeError(error))
    } else if (error instanceof ServiceError && error.cause === "NotFound") {
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
    const paymentIntent = await intentService.getIntent(id)

    if (!paymentIntent) {
      return next(new HttpError("NotFound"))
    }

    return res.status(201).json({
      ok: true,
      data: {
        paymentIntent,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Stripe.errors.StripeError) {
      return next(parseStripeError(error))
    } else if (error instanceof ServiceError && error.cause === "NotFound") {
      return next(new HttpError("NotFound"))
    } else if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}
