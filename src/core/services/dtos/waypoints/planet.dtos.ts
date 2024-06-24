// Types
import type { Planet } from "@entities/waypoints.entities.js"
import type { WaypointDTOBase } from "./waypoint.dtos.js"

export type PlanetDetails = Pick<Planet, "size" | "composition">

export interface PlanetDTO extends WaypointDTOBase {
  category: "Planet"
  details: PlanetDetails
}
