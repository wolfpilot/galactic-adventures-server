// Types
import type { WaypointModel } from "@database/repositories/models/waypoints.models.js"
import type { AdventureBase } from "@entities/products/adventure.entities.js"

import type {
  Supercluster,
  SuperclusterDetails,
} from "./supercluster.entities.js"
import type { Cluster, ClusterDetails } from "./cluster.entities.js"
import type { Galaxy, GalaxyDetails } from "./galaxy.entities.js"
import type { Nebula, NebulaDetails } from "./nebula.entities.js"
import type { System, SystemDetails } from "./system.entities.js"
import type { Star, StarDetails } from "./star.entities.js"
import type { Planet, PlanetDetails } from "./planet.entities.js"
import type { Satellite, SatelliteDetails } from "./satellite.entities.js"

export type WaypointBase = Pick<
  WaypointModel,
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

export type WaypointPartial =
  | Supercluster
  | Cluster
  | Galaxy
  | Nebula
  | System
  | Star
  | Planet
  | Satellite

export type WaypointAdventurePartial = Pick<AdventureBase, "id" | "price">
export type WaypointChildrenPartial = Pick<
  WaypointModel,
  "id" | "code" | "name" | "category"
>

export type Waypoint = WaypointPartial & {
  adventure: WaypointAdventurePartial | null
  children: WaypointChildrenPartial[]
}
