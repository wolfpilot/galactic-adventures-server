// Types
import type { Tables } from "@database/supabase.schema.js"

export type WaypointModel = Tables<"waypoints">

export type ClusterModel = Tables<"way_clusters">
export type GalaxyModel = Tables<"way_galaxies">
export type NebulaModel = Tables<"way_nebulae">
export type PlanetModel = Tables<"way_planets">
export type SatelliteModel = Tables<"way_satellites">
export type StarModel = Tables<"way_stars">
export type SuperclusterModel = Tables<"way_superclusters">
export type SystemModel = Tables<"way_systems">
