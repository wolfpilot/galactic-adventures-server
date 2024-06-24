// Types
import type { System } from "@entities/waypoints.entities.js"
import type { WaypointDTOBase } from "./waypoint.dtos.js"

export type SystemDetails = Pick<System, "type" | "isInhabited">

export interface SystemDTO extends WaypointDTOBase {
  category: "System"
  details: SystemDetails
}
