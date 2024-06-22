// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { WaypointBase } from "./waypoints.entities.js"

export type SuperclustersRow = DatabaseTables["way_superclusters"]["Row"]
export type SuperclusterDetails = Pick<SuperclustersRow, "morphology">

export interface Supercluster extends WaypointBase {
  category: "Supercluster"
  details: SuperclusterDetails
}
