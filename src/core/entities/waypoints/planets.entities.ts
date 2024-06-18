// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { WaypointBase } from "./waypoints.entities.js"

export type PlanetsRow = DatabaseTables["way_planets"]["Row"]
export type PlanetSubtypes = Pick<PlanetsRow, "size" | "composition">

export interface Planet extends WaypointBase {
  category: "Planet"
  details: PlanetSubtypes
}
