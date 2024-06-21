// Types
import type { AdventuresGetById, AdventuresGetByIdResponse } from "./types.js"

// Database
import { supabase } from "@database/dataSource.js"

// Helper
import { ServiceError } from "@helpers/errorHelper.js"
import { parsePgError } from "@services/helpers/serviceError.helpers.js"
import { waypointsGetDetails } from "@services/helpers/query.helpers.js"

export const adventuresGetById: AdventuresGetById = async ({ id }) => {
  try {
    const { error: adventureError, data: adventureData } = await supabase
      .from("prd_adventures")
      .select(
        `
          id,
          description,
          price,
          waypoint:waypoints!prd_adventures_waypoint_id_fkey(
            id,
            parent_id,
            code,
            name,
            category,
            source_table:waypoints_data_source(
              table_name
            )
          )
        `
      )
      .eq("id", id)
      .single()

    if (adventureError) {
      const parsedError = parsePgError(adventureError)

      return parsedError.cause === "NotFound"
        ? Promise.resolve(null)
        : Promise.reject(parsedError)
    }

    const { waypoint, ...otherAdventureData } = adventureData

    if (!waypoint?.source_table) {
      return Promise.resolve(null)
    }

    const { source_table, ...otherWaypointData } = waypoint

    // Fetch additional details for target waypoint
    const waypointDetailsData = await waypointsGetDetails({
      id: waypoint.id,
      tableName: source_table.table_name,
    })

    // Parse data
    const payload = {
      ...otherAdventureData,
      waypoint: {
        ...otherWaypointData,
        details: waypointDetailsData,
      },
    } as AdventuresGetByIdResponse

    return Promise.resolve(payload)
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error)
    }

    return Promise.reject(new ServiceError("Unhandled"))
  }
}
