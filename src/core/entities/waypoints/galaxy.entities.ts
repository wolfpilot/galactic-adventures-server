// Types
import type { GalaxyModel } from "@database/repositories/models/waypoints.models.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type GalaxyDetails = Pick<GalaxyModel, "shape" | "emissions">

export interface Galaxy extends WaypointBase {
  category: "Galaxy"
  details: GalaxyDetails | null
}
