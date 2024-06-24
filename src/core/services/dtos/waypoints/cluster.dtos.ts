// Types
import type { Cluster } from "@entities/waypoints.entities.js"
import type { WaypointDTOBase } from "./waypoint.dtos.js"

export type ClusterDetails = Pick<Cluster, "constellations">

export interface ClusterDTO extends WaypointDTOBase {
  category: "Cluster"
  details: ClusterDetails
}
