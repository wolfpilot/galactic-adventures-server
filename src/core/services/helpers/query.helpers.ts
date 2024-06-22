// Types
import type { WaypointTableName } from "@entities/database.entities.js"
import type { WaypointSubtypes } from "@entities/waypoints/waypoints.entities.js"

// Database
import { supabase } from "@database/dataSource.js"

// Helper
import { ServiceError } from "@helpers/errorHelper.js"
import { parsePgError } from "@services/helpers/serviceError.helpers.js"

type WaypointsGetDetails = ({
  id,
}: {
  id: number
  tableName: WaypointTableName
}) => Promise<WaypointSubtypes | null>

const generateDetailsQuery = (tableName: WaypointTableName) => {
  switch (tableName) {
    case "way_superclusters":
      return `
        morphology
      `
    case "way_clusters":
      return `
        constellations
      `
    case "way_galaxies":
      return `
        shape
      `
    case "way_nebulae":
      return `
        type
      `
    case "way_systems":
      return `
        type,
        isInhabited
      `
    case "way_stars":
      return `
        class
      `
    case "way_planets":
      return `
        size,
        composition
      `
    case "way_satellites":
      return `
        composition
    `
    default:
      return null
  }
}

export const waypointsGetDetails: WaypointsGetDetails = async ({
  id,
  tableName,
}) => {
  try {
    const detailsQuery = generateDetailsQuery(tableName)

    if (!detailsQuery) {
      return Promise.resolve(null)
    }

    const { error, data } = await supabase
      .from(tableName)
      .select(detailsQuery)
      .eq("waypoint_id", id)
      .single()

    if (error) {
      const parsedError = parsePgError(error)

      return parsedError.reason === "NotFound"
        ? Promise.resolve(null)
        : Promise.reject(parsedError)
    }

    const payload = data as unknown as WaypointSubtypes

    return Promise.resolve(payload)
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error)
    }

    return Promise.reject(new ServiceError("Unhandled"))
  }
}
