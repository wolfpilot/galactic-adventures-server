// Types
import type { SuperclusterModel } from "@database/repositories/models/waypoints.models.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type SuperclusterDetails = Pick<SuperclusterModel, "morphology">

export interface Supercluster extends WaypointBase {
  category: "Supercluster"
  details: SuperclusterDetails | null
}
