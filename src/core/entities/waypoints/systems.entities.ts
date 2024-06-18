// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { WaypointBase } from "./waypoints.entities.js"

export type SystemsRow = DatabaseTables["way_systems"]["Row"]
export type SystemSubtypes = Pick<SystemsRow, "type" | "isInhabited">

export interface System extends WaypointBase {
  category: "System"
  details: SystemSubtypes
}
