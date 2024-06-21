// Types
import type { AdventuresGetById } from "./types.js"

// Services
import * as adventuresServices from "@services/products/adventures.services.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

export const adventuresGetById: AdventuresGetById = async (req, res, next) => {
  const { id } = req.params

  const parsedId = parseInt(id, 10)

  if (!parsedId) {
    return next(new HttpError("BadRequest"))
  }

  try {
    const adventure = await adventuresServices.adventuresGetById({
      id: parsedId,
    })

    if (!adventure) {
      return next(new HttpError("NotFound"))
    }

    return res.status(200).json({
      ok: true,
      data: {
        adventure,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}
