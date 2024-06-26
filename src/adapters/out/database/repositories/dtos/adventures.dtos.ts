// Types
import type { AdventureDTOBase } from "@services/dtos/products/adventure.dtos.js"
import type { WaypointDTOBase } from "@services/dtos/waypoints/waypoint.dtos.js"

export type AdventureDTO = AdventureDTOBase & {
  waypoint: WaypointDTOBase | null
}
