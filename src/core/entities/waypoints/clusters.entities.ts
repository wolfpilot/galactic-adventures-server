// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { WaypointBase } from "./waypoints.entities.js"

export type ClustersRow = DatabaseTables["way_clusters"]["Row"]
export type ClusterDetails = Pick<ClustersRow, "constellations">

export interface Cluster extends WaypointBase {
  category: "Cluster"
  details: ClusterDetails
}
