// Types
import type { NebulaModel } from "@database/repositories/models/waypoints.models.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type NebulaDetails = Pick<NebulaModel, "type">

export interface Nebula extends WaypointBase {
  category: "Nebula"
  details: NebulaDetails | null
}
