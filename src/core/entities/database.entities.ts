import type { Database } from "@database/supabase.js"

// Useful enum aliases
export type DatabaseTables = Database["public"]["Tables"]
export type WaypointEnums = Database["public"]["Enums"]

export type GalaxyShape = WaypointEnums["GalaxyShape"]
export type NebulaType = WaypointEnums["NebulaType"]
export type PlanetSize = WaypointEnums["PlanetSize"]
export type StarClass = WaypointEnums["StarClass"]
export type SuperclusterMorphology = WaypointEnums["SuperclusterMorphology"]
export type SurfaceComposition = WaypointEnums["SurfaceComposition"]
export type SystemType = WaypointEnums["SystemType"]
export type WaypointCategory = WaypointEnums["WaypointCategory"]
export type WaypointTableName = WaypointEnums["WaypointTableName"]
