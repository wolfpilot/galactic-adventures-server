// Types
import type { PlanetModel } from "@database/repositories/models/waypoints.models.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type PlanetDetails = Pick<PlanetModel, "size" | "composition">

export interface Planet extends WaypointBase {
  category: "Planet"
  details: PlanetDetails | null
}
