// Types
import type { Satellite } from "@entities/waypoints.entities.js"
import type { WaypointDTOBase } from "./waypoint.dtos.js"

export type SatelliteDetails = Pick<Satellite, "composition">

export interface SatelliteDTO extends WaypointDTOBase {
  category: "Satellite"
  details: SatelliteDetails
}
