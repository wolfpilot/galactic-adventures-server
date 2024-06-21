// Types
import type { AdventuresGetById } from "./types.js"

// Database
import { supabase } from "@database/dataSource.js"

// Services
import { waypointsGetById } from "@services/waypoints/waypoints.services.js"

// Helper
import { ServiceError } from "@helpers/errorHelper.js"
import { parsePgError } from "@services/helpers/serviceError.helpers.js"

export const adventuresGetById: AdventuresGetById = async ({ id }) => {
  try {
    const { error: adventureError, data: adventureData } = await supabase
      .from("prd_adventures")
      .select(
        `
          waypoint_id,
          description,
          price
        `
      )
      .eq("id", id)
      .single()

    if (adventureError) {
      const parsedError = parsePgError(adventureError)

      return parsedError.reason === "NotFound"
        ? Promise.resolve(null)
        : Promise.reject(parsedError)
    }

    const { waypoint_id, ...otherAdventureData } = adventureData

    const waypointBaseData = await waypointsGetById({
      id: waypoint_id,
    })

    if (!waypointBaseData) {
      return Promise.resolve(null)
    }

    // Parse data
    const payload = {
      ...waypointBaseData,
      adventure: {
        ...otherAdventureData,
      },
    }

    return Promise.resolve(payload)
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error)
    }

    return Promise.reject(new ServiceError("Unhandled"))
  }
}
