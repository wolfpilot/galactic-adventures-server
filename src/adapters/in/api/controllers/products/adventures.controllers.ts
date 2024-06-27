// Types
import type { AdventuresGetById } from "./types.js"

// Repositories
import { AdventuresRepository } from "@database/repositories/adventures.repositories.js"

// Services
import { AdventuresServiceImpl } from "@services/products/adventures.services.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

const adventuresRepository = new AdventuresRepository()
const adventuresService = new AdventuresServiceImpl(adventuresRepository)

export const adventuresGetById: AdventuresGetById = async (req, res, next) => {
  const { id } = req.params

  const parsedId = parseInt(id, 10)

  if (!parsedId) {
    return next(new HttpError("BadRequest"))
  }

  try {
    const adventure = await adventuresService.getWithWaypointById(parsedId)

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
