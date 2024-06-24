// Types
import type { Waypoint } from "@entities/waypoints.entities.js"
import type { Adventure } from "@entities/products.entities.js"

import type {
  SuperclusterDTO,
  SuperclusterDetails,
} from "./supercluster.dtos.js"
import type { ClusterDTO, ClusterDetails } from "./cluster.dtos.js"
import type { GalaxyDTO, GalaxyDetails } from "./galaxy.dtos.js"
import type { NebulaDTO, NebulaDetails } from "./nebula.dtos.js"
import type { SystemDTO, SystemDetails } from "./system.dtos.js"
import type { StarDTO, StarDetails } from "./star.dtos.js"
import type { PlanetDTO, PlanetDetails } from "./planet.dtos.js"
import type { SatelliteDTO, SatelliteDetails } from "./satellite.dtos.js"

export type WaypointDTOBase = Pick<
  Waypoint,
  "id" | "parent_id" | "code" | "name" | "category"
>

export type WaypointDetailsDTO =
  | SuperclusterDetails
  | ClusterDetails
  | GalaxyDetails
  | NebulaDetails
  | SystemDetails
  | StarDetails
  | PlanetDetails
  | SatelliteDetails

export type WaypointDTOPartial =
  | SuperclusterDTO
  | ClusterDTO
  | GalaxyDTO
  | NebulaDTO
  | SystemDTO
  | StarDTO
  | PlanetDTO
  | SatelliteDTO

export type WaypointDTO = WaypointDTOPartial & {
  adventure: Pick<Adventure, "id" | "description" | "price"> | null
  children: Pick<Waypoint, "id" | "code" | "name" | "category">[]
}
