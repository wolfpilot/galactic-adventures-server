// Types
import type { WaypointsGetById, WaypointsGetByIdResponse } from "./types.js"

// Database
import { supabase } from "@database/dataSource.js"

// Helpers
import { ServiceError } from "@helpers/errorHelper.js"
import { parsePgError } from "@services/helpers/serviceError.helpers.js"
import { waypointsGetDetails } from "@services/helpers/query.helpers.js"

/**
 * Getting the waypoint data is achieved in two separate queries:
 *
 * 1. Fetch the base data for {id} waypoint and its direct descendants.
 * 2. Fetch additional details for {id} based on the table name received in step 1.
 */
export const waypointsGetById: WaypointsGetById = async ({ id }) => {
  try {
    // Fetch the base data for target waypoint and its direct descendants
    const { error: waypointError, data: waypointData } = await supabase
      .from("waypoints")
      .select(
        `
          id,
          parent_id,
          code,
          name,
          category,
          is_destination,
          source_table:waypoints_data_source(table_name)
        `
      )
      .or(`id.eq.${id}, parent_id.eq.${id}`)

    if (waypointError) {
      const parsedError = parsePgError(waypointError)

      return parsedError.reason === "NotFound"
        ? Promise.resolve(null)
        : Promise.reject(parsedError)
    }

    // Find the target waypoint data object
    const targetWaypoint = waypointData.find((item) => item.id === id)

    if (!targetWaypoint?.source_table) {
      return Promise.resolve(null)
    }

    const { source_table, ...otherWaypointData } = targetWaypoint

    // Fetch additional details for target waypoint
    const detailsData = await waypointsGetDetails({
      id,
      tableName: source_table.table_name,
    })

    if (!detailsData) {
      return Promise.resolve(null)
    }

    // Parse data
    const childrenData = waypointData
      .filter((item) => item.id !== id)
      .map((item) => ({
        id: item.id,
        code: item.code,
        name: item.name,
        category: item.category,
        is_destination: item.is_destination,
      }))

    const payload = {
      ...otherWaypointData,
      details: detailsData,
      children: childrenData,
    } as WaypointsGetByIdResponse

    return Promise.resolve(payload)
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error)
    }

    return Promise.reject(new ServiceError("Unhandled"))
  }
}
