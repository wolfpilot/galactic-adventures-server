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

const getExtAtmosphereQuery = (tableName: WaypointTableName) => `
  atmosphere:ext_way_atmospheres!${tableName}_ext_atmosphere_id_fkey(
    type,
    co2_pct,
    n2_pct,
    o2_pct,
    ar_pct,
    ch4_pct,
    na_pct,
    h2_pct,
    he_pct
  )
`

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
            shape,
            emissions
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "Nebula":
      return await supabase
        .from(tableName)
        .select(
          `
              type,
              composition,
              age_y,
              temp_avg_k
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "System":
      return await supabase
        .from(tableName)
        .select(
          `
          is_enabled,
          is_inhabited,
          type
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "Star":
      return await supabase
        .from(tableName)
        .select(
          `
            life_cycle,
            mass,
            ${getExtAtmosphereQuery(tableName)},
            spectral_class:meta_star_spectral_classes!way_stars_spectral_class_id_fkey(
              class,
              chromacity,
              temperature_min_k,
              temperature_max_k
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
            is_habitable,
            size,
            composition,
            geological_activity,
            diameter_km,
            surface_temp_avg_k,
            day_length_h,
            orbital_period_d,
            gravity_n,
            wind_speed_avg_kmh,
            wind_gust_max_kmh,
            precipitation_level,
            precipitation_types,
            weather_alerts,
            ${getExtAtmosphereQuery(tableName)}
          `
        )
        .eq("waypoint_id", id)
        .single()
    case "Satellite":
      return await supabase
        .from(tableName)
        .select(
          `
            size,
            composition,
            geological_activity,
            diameter_km,
            surface_temp_avg_k,
            day_length_h,
            orbital_period_d,
            gravity_n,
            wind_speed_avg_kmh,
            wind_gust_max_kmh,
            precipitation_level,
            precipitation_types,
            weather_alerts,
            ${getExtAtmosphereQuery(tableName)}
          `
        )
        .eq("waypoint_id", id)
        .single()
    default:
      return assertExhaustiveGuard(cat)
  }
}
