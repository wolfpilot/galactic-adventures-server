// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { WaypointBase } from "./waypoints.entities.js"

export type GalaxiesRow = DatabaseTables["way_galaxies"]["Row"]
export type GalaxyDetails = Pick<GalaxiesRow, "shape">

export interface Galaxy extends WaypointBase {
  category: "Galaxy"
  details: GalaxyDetails
}
