// Types
import type { Adventure } from "@entities/products.entities.js"
import type {
  WaypointDTOBase,
  WaypointDetailsDTO,
} from "@services/dtos/waypoints/waypoint.dtos.js"

export type AdventureDTOBase = Pick<Adventure, "id" | "description" | "price">

export interface AdventureDTO extends AdventureDTOBase {
  waypoint: WaypointDTOBase & {
    details: WaypointDetailsDTO | null
  }
}
