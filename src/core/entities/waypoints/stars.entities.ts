// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { WaypointBase } from "./waypoints.entities.js"

export type StarsRow = DatabaseTables["way_stars"]["Row"]
export type StarSubtypes = Pick<StarsRow, "class">

export interface Star extends WaypointBase {
  category: "Star"
  details: StarSubtypes
}
