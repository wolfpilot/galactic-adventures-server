// Types
import type { ClusterModel } from "@database/repositories/models/waypoints.models.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type ClusterDetails = Pick<ClusterModel, "constellations">

export interface Cluster extends WaypointBase {
  category: "Cluster"
  details: ClusterDetails | null
}
