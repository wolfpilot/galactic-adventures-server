// Types
import type { Supercluster } from "@entities/waypoints.entities.js"
import type { WaypointDTOBase } from "./waypoint.dtos.js"

export type SuperclusterDetails = Pick<Supercluster, "morphology">

export interface SuperclusterDTO extends WaypointDTOBase {
  category: "Supercluster"
  details: SuperclusterDetails
}
