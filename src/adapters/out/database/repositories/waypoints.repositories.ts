// Types
import type { WaypointTableName } from "@entities/database.entities.js"
import type { WaypointDetailsDTO } from "@database/repositories/dtos/waypoints.dtos.js"

// Database
import { supabase } from "@database/dataSource.js"

// Ports
import type { WaypointsRepositoryPort } from "@ports/waypoints.ports.js"

// Helpers
import { parsePgError } from "@database/lib/helpers/error.helpers.js"

// Utils
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
        meta_star_class:meta_star_classes!way_stars_class_fkey(
          class,
          chromacity,
          temperature_min_kelvin,
          temperature_max_kelvin
        )
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

export class WaypointsRepository implements WaypointsRepositoryPort {
  async findWithChildrenById(id: number) {
    const { error, data } = await supabase
      .from("waypoints")
      .select(
        `
          id,
          parent_id,
          code,
          name,
          category,
          data_source:waypoints_data_source(
            table_name
          ),
          adventure:prd_adventures!prd_adventures_waypoint_id_fkey(
            id,
            description,
            price
          )
        `
      )
      .or(`id.eq.${id}, parent_id.eq.${id}`)
      .order("id", { ascending: true })

    if (error) {
      const parsedError = parsePgError(error)

      return parsedError.cause === "NotFound"
        ? Promise.resolve([])
        : Promise.reject(parsedError)
    }

    return Promise.resolve(data)
  }

  async findDetailsByIdAndTable(id: number, tableName: WaypointTableName) {
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

      return parsedError.cause === "NotFound"
        ? Promise.resolve(null)
        : Promise.reject(parsedError)
    }

    return Promise.resolve(data as unknown as WaypointDetailsDTO)
  }
}
