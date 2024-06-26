// Types
import type { WaypointCategory } from "@database/repositories/models/database.models.js"
import type { Waypoint } from "@entities/waypoints/waypoint.entities.js"

// Database
import { supabase } from "@database/dataSource.js"

// Ports
import type { WaypointsRepositoryPort } from "@ports/waypoints.ports.js"

// Helpers
import { parsePgError } from "@database/lib/helpers/error.helpers.js"
import { getWaypointDetails } from "@database/lib/helpers/query.helpers.js"

export class WaypointsRepository implements WaypointsRepositoryPort {
  async findDetailsByIdAndCat(id: number, cat: WaypointCategory) {
    const details = await getWaypointDetails(id, cat)

    if (!details) {
      return Promise.resolve(null)
    }

    const { error, data } = details

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
            description,
            price
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

    const { adventure, ...otherWaypointData } = targetWaypoint

    // Fetch additional details for target waypoint
    const detailsData = await this.findDetailsByIdAndCat(
      id,
      targetWaypoint.category
    )

    // Parse data
    const childrenData = waypointsData
      .filter((item) => item.id !== id)
      .map((item) => ({
        id: item.id,
        code: item.code,
        name: item.name,
        category: item.category,
        adventure: item.adventure[0] ?? null,
      }))

    const payload = {
      ...otherWaypointData,
      details: detailsData,
      adventure: adventure[0] ?? null,
      children: childrenData,
    }

    return Promise.resolve(payload as Waypoint)
  }
}
