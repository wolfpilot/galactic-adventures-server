// Types
import type { WaypointCategory } from "@database/repositories/models/database.models.js"
import type {
  WaypointDTO,
  WaypointDetailsDTO,
} from "@services/dtos/waypoints.dtos.js"

export interface WaypointsService {
  getTopParentId: () => Promise<{ id: number } | null>
  getWithChildrenById: (id: number) => Promise<WaypointDTO | null>
  getDetailsByIdAndTable: (
    id: number,
    cat: WaypointCategory
  ) => Promise<WaypointDetailsDTO | null>
}
