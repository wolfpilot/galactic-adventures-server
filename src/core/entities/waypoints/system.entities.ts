// Types
import type { SystemModel } from "@database/repositories/models/waypoints.models.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type SystemDetails = Pick<
  SystemModel,
  "is_enabled" | "is_inhabited" | "type"
>

export interface System extends WaypointBase {
  category: "System"
  details: SystemDetails | null
}
