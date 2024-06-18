import type { Database } from "@database/supabase.js"

// Types
import type {
  Supercluster,
  SuperclusterSubtypes,
} from "./superclusters.entities.js"
import type { Cluster, ClusterSubtypes } from "./clusters.entities.js"
import type { Galaxy, GalaxySubtypes } from "./galaxies.entities.js"
import type { Nebula, NebulaSubtypes } from "./nebulae.entities.js"
import type { System, SystemSubtypes } from "./systems.entities.js"
import type { Star, StarSubtypes } from "./stars.entities.js"
import type { Planet, PlanetSubtypes } from "./planets.entities.js"
import type { Satellite, SatelliteSubtypes } from "./satellites.entities.js"

export type WaypointsRow = Database["public"]["Tables"]["waypoints"]["Row"]

export type WaypointBase = Pick<
  WaypointsRow,
  "id" | "parent_id" | "code" | "name" | "category" | "is_destination"
>

export type WaypointSubtypes =
  | SuperclusterSubtypes
  | ClusterSubtypes
  | GalaxySubtypes
  | NebulaSubtypes
  | SystemSubtypes
  | StarSubtypes
  | PlanetSubtypes
  | SatelliteSubtypes

export type Waypoint =
  | Supercluster
  | Cluster
  | Galaxy
  | Nebula
  | System
  | Star
  | Planet
  | Satellite
