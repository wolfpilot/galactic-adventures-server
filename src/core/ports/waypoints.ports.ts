// Types
import type { WaypointCategory } from "@entities/database.entities.js"
import type {
  WaypointDTO,
  WaypointDetailsDTO,
} from "@database/repositories/dtos/waypoints.dtos.js"

export interface WaypointsRepositoryPort {
  findWithChildrenById: (id: number) => Promise<WaypointDTO | null>
  findDetailsByIdAndCat: (
    id: number,
    cat: WaypointCategory
  ) => Promise<WaypointDetailsDTO | null>
}
