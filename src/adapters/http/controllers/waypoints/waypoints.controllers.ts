// Types
import type { WaypointsGetById } from "./types.js"

// Services
import * as waypointsServices from "@services/waypoints/waypoints.services.js"

// Helpers
import { HttpError } from "@helpers/errorHelper.js"

export const waypointsGetById: WaypointsGetById = async (req, res, next) => {
  const { id } = req.params

  const parsedId = parseInt(id, 10)

  if (!parsedId) {
    return next(new HttpError("BadRequest"))
  }

  try {
    const waypoint = await waypointsServices.waypointsGetById({ id: parsedId })

    if (!waypoint) {
      return next(new HttpError("NotFound"))
    }

    return res.status(200).json({
      ok: true,
      data: {
        waypoint,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}
