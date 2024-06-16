// Types
import { type DestinationsGetAll, type DestinationsGetById } from "./types.js"

// Services
import * as destinationsServices from "@services/products/adventures.services.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

export const destinationsGetAll: DestinationsGetAll = async (
  _req,
  res,
  next
) => {
  try {
    const destinations = await destinationsServices.destinationsGetAll()

    if (!destinations) {
      return next(new HttpError("NotFound"))
    }

    return res.status(200).json({
      ok: true,
      data: {
        destinations,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}

export const destinationsGetById: DestinationsGetById = async (
  req,
  res,
  next
) => {
  const { id } = req.params

  if (!id) {
    return next(new HttpError("BadRequest"))
  }

  try {
    const destination = await destinationsServices.destinationsGetById({ id })

    if (!destination) {
      return next(new HttpError("NotFound"))
    }

    return res.status(200).json({
      ok: true,
      data: {
        destination,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}
