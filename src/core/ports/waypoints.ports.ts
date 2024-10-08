// Types
import type { WaypointCategory } from "@database/repositories/models/database.models.js"
import type {
  WaypointDetails,
  Waypoint,
} from "@entities/waypoints/waypoint.entities.js"

export interface WaypointsRepositoryPort {
  findTopParentId: () => Promise<{ id: number } | null>
  findDetailsByIdAndCat: (
    id: number,
    cat: WaypointCategory
  ) => Promise<WaypointDetails | null>
  findWithChildrenById: (id: number) => Promise<Waypoint | null>
}
