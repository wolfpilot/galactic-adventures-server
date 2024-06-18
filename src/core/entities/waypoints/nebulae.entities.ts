// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { WaypointBase } from "./waypoints.entities.js"

export type NebulaeRow = DatabaseTables["way_nebulae"]["Row"]
export type NebulaSubtypes = Pick<NebulaeRow, "type">

export interface Nebula extends WaypointBase {
  category: "Nebula"
  details: NebulaSubtypes
}
