// Types
import type { Galaxy } from "@entities/waypoints.entities.js"
import type { WaypointDTOBase } from "./waypoint.dtos.js"

export type GalaxyDetails = Pick<Galaxy, "shape">

export interface GalaxyDTO extends WaypointDTOBase {
  category: "Galaxy"
  details: GalaxyDetails
}
