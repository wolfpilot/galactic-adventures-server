// Types
import type { WaypointCategory } from "@entities/database.entities.js"
import type {
  WaypointDTO,
  WaypointDetailsDTO,
} from "@services/dtos/waypoints/waypoint.dtos.js"

export interface WaypointsService {
  getWithChildrenById: (id: number) => Promise<WaypointDTO | null>
  getDetailsByIdAndTable: (
    id: number,
    cat: WaypointCategory
  ) => Promise<WaypointDetailsDTO | null>
}
