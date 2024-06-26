import type { PostgrestSingleResponse } from "@supabase/supabase-js"

// Types
import type {
  WaypointCategory,
  WaypointTableName,
} from "@database/repositories/models/database.models.js"
import type { WaypointDetails } from "@entities/waypoints/waypoint.entities.js"

// Database
import { supabase } from "@database/dataSource.js"

// Helpers
import { assertExhaustiveGuard } from "@helpers/typeGuards.helpers.js"

// Setup
const categoryToTableName: Record<WaypointCategory, WaypointTableName> = {
  Supercluster: "way_superclusters",
  Cluster: "way_clusters",
  Galaxy: "way_galaxies",
  Nebula: "way_nebulae",
  System: "way_systems",
  Star: "way_stars",
  Planet: "way_planets",
  Satellite: "way_satellites",
}

export const getWaypointDetails = async (
  id: number,
  cat: WaypointCategory
): Promise<PostgrestSingleResponse<WaypointDetails>> => {
  const tableName = categoryToTableName[cat]

  switch (cat) {
    case "Supercluster":
      return await supabase
        .from(tableName)
        .select(
          `
            morphology
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "Cluster":
      return await supabase
        .from(tableName)
        .select(
          `
            constellations
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "Galaxy":
      return await supabase
        .from(tableName)
        .select(
          `
            shape
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "Nebula":
      return await supabase
        .from(tableName)
        .select(
          `
              type
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "System":
      return await supabase
        .from(tableName)
        .select(
          `
            type,
            isInhabited
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "Star":
      return await supabase
        .from(tableName)
        .select(
          `
            class,
            meta_star_class:meta_star_classes!way_stars_class_fkey(
              chromacity,
              temperature_min_kelvin,
              temperature_max_kelvin
            )
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "Planet":
      return await supabase
        .from(tableName)
        .select(
          `
            size,
            composition
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "Satellite":
      return await supabase
        .from(tableName)
        .select(
          `
            composition
          `
        )
        .eq("waypoint_id", id)
        .single()
    default:
      return assertExhaustiveGuard(cat)
  }
}
