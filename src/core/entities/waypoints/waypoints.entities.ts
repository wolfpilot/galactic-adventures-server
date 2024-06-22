import type { Database } from "@database/supabase.js"

// Types
import type { AdventureBase } from "@entities/products/adventures.entities.js"
import type {
  Supercluster,
  SuperclusterDetails,
} from "./superclusters.entities.js"
import type { Cluster, ClusterDetails } from "./clusters.entities.js"
import type { Galaxy, GalaxyDetails } from "./galaxies.entities.js"
import type { Nebula, NebulaDetails } from "./nebulae.entities.js"
import type { System, SystemDetails } from "./systems.entities.js"
import type { Star, StarDetails } from "./stars.entities.js"
import type { Planet, PlanetDetails } from "./planets.entities.js"
import type { Satellite, SatelliteDetails } from "./satellites.entities.js"

export type WaypointsRow = Database["public"]["Tables"]["waypoints"]["Row"]
export type WaypointBase = Pick<
  WaypointsRow,
  "id" | "parent_id" | "code" | "name" | "category"
>

export type WaypointDetails =
  | SuperclusterDetails
  | ClusterDetails
  | GalaxyDetails
  | NebulaDetails
  | SystemDetails
  | StarDetails
  | PlanetDetails
  | SatelliteDetails

export type WaypointTypes =
  | Supercluster
  | Cluster
  | Galaxy
  | Nebula
  | System
  | Star
  | Planet
  | Satellite

export type Waypoint = WaypointTypes & {
  adventure: AdventureBase | null
}
