// Types
import type { Tables } from "@database/supabase.schema.js"

export type Waypoint = Tables<"waypoints">
export type WaypointDataSources = Tables<"waypoints_data_source">

export type Cluster = Tables<"way_clusters">
export type Galaxy = Tables<"way_galaxies">
export type Nebula = Tables<"way_nebulae">
export type Planet = Tables<"way_planets">
export type Satellite = Tables<"way_satellites">
export type Star = Tables<"way_stars">
export type Supercluster = Tables<"way_superclusters">
export type System = Tables<"way_systems">
