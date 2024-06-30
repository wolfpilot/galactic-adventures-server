// Types
import type { WaypointCategory } from "@database/repositories/models/database.models.js"
import type { Waypoint } from "@entities/waypoints/waypoint.entities.js"

// Database
import { supabase } from "@database/dataSource.js"

// Ports
import type { WaypointsRepositoryPort } from "@ports/waypoints.ports.js"

// Mappers
import { WaypointMapper } from "./mappers/WaypointMapper.js"

// Helpers
import { parsePgError } from "@database/lib/helpers/error.helpers.js"
import { getWaypointDetails } from "@database/lib/helpers/query.helpers.js"

export class WaypointsRepository implements WaypointsRepositoryPort {
  async findDetailsByIdAndCat(id: number, cat: WaypointCategory) {
    const { error, data } = await getWaypointDetails(id, cat)

    if (error) {
      const parsedError = parsePgError(error)

      return parsedError.cause === "NotFound"
        ? Promise.resolve(null)
        : Promise.reject(parsedError)
    }

    return Promise.resolve(data)
  }

  async findWithChildrenById(id: number) {
    const { error: waypointsError, data: waypointsData } = await supabase
      .from("waypoints")
      .select(
        `
          id,
          parent_id,
          code,
          name,
          category,
          adventure:prd_adventures!prd_adventures_waypoint_id_fkey(
            id,
            price_sb
          )
        `
      )
      .or(`id.eq.${id}, parent_id.eq.${id}`)
      .order("id", { ascending: true })

    if (waypointsError) {
      const parsedError = parsePgError(waypointsError)

      return parsedError.cause === "NotFound"
        ? Promise.resolve(null)
        : Promise.reject(parsedError)
    }

    if (!waypointsData.length) {
      return Promise.resolve(null)
    }

    // Find the target waypoint data object
    const targetWaypoint = waypointsData.find((item) => item.id === id)

    if (!targetWaypoint) {
      return Promise.resolve(null)
    }

    // Fetch additional details for target waypoint
    const detailsData = await this.findDetailsByIdAndCat(
      id,
      targetWaypoint.category
    )

    // Parse data
    const otherWaypoints = waypointsData.filter((item) => item.id !== id)

    const payload = WaypointMapper.toEntity({
      targetWaypointData: targetWaypoint,
      otherWaypointsData: otherWaypoints,
      detailsData,
    }) as Waypoint

    return Promise.resolve(payload)
  }
}
