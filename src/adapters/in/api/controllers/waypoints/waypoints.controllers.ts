// Types
import type { WaypointsGetById } from "./types.js"

// Repositories
import { WaypointsRepository } from "@database/repositories/waypoints.repositories.js"

// Services
import { WaypointsServiceImpl } from "@services/waypoints/waypoints.services.js"

// Helpers
import { HttpError } from "@helpers/error.helpers.js"

const waypointsRepository = new WaypointsRepository()
const waypointsService = new WaypointsServiceImpl(waypointsRepository)

export const waypointsGetById: WaypointsGetById = async (req, res, next) => {
  const { id } = req.params

  try {
    let parsedId

    /**
     * Either default to the top-level parent ID or parse the supplied one.
     *
     * Express decodes all params to strings, so we first parse it to test
     * for null.
     */
    if (JSON.parse(id) === null) {
      const topParentId = await waypointsService.getTopParentId()

      if (!topParentId) {
        return next(new HttpError("NotFound"))
      }

      parsedId = topParentId.id
    } else {
      parsedId = parseInt(id, 10)
    }

    if (!parsedId) {
      return next(new HttpError("NotFound"))
    }

    const waypoint = await waypointsService.getWithChildrenById(parsedId)

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
