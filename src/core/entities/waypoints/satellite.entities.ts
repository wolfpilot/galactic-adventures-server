// Types
import type { SatelliteModel } from "@database/repositories/models/waypoints.models.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type SatelliteDetails = Pick<SatelliteModel, "composition">

export interface Satellite extends WaypointBase {
  category: "Satellite"
  details: SatelliteDetails
}
