// Types
import type { Nebula } from "@entities/waypoints.entities.js"
import type { WaypointDTOBase } from "./waypoint.dtos.js"

export type NebulaDetails = Pick<Nebula, "type">

export interface NebulaDTO extends WaypointDTOBase {
  category: "Nebula"
  details: NebulaDetails
}
