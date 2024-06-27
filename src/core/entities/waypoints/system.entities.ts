// Types
import type { SystemModel } from "@database/repositories/models/waypoints.models.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type SystemDetails = Pick<SystemModel, "type" | "isInhabited">

export interface System extends WaypointBase {
  category: "System"
  details: SystemDetails | null
}
