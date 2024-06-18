// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { WaypointBase } from "./waypoints.entities.js"

export type SatellitesRow = DatabaseTables["way_satellites"]["Row"]
export type SatelliteSubtypes = Pick<SatellitesRow, "composition">

export interface Satellite extends WaypointBase {
  category: "Satellite"
  details: SatelliteSubtypes
}
