// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { WaypointBase } from "./waypoints.entities.js"

export type NebulaeRow = DatabaseTables["way_nebulae"]["Row"]
export type NebulaDetails = Pick<NebulaeRow, "type">

export interface Nebula extends WaypointBase {
  category: "Nebula"
  details: NebulaDetails
}
