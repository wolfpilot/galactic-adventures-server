// Types
import type { WaypointsGetById } from "./types.js"

// Adapters
import { WaypointsRepository } from "@database/repositories/waypoints.repositories.js"

// Services
import { WaypointsServiceImpl } from "@services/waypoints/waypoints.services.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

const waypointsRepository = new WaypointsRepository()
const waypointsService = new WaypointsServiceImpl(waypointsRepository)

export const waypointsGetById: WaypointsGetById = async (req, res, next) => {
  const { id } = req.params

  const parsedId = parseInt(id, 10)

  if (!parsedId) {
    return next(new HttpError("BadRequest"))
  }

  try {
    const data = await waypointsService.getWithChildrenById(parsedId)

    if (!data) {
      return next(new HttpError("NotFound"))
    }

    return res.status(200).json({
      ok: true,
      data,
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}
