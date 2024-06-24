// Types
import type { WaypointTableName } from "@entities/database.entities.js"
import type {
  WaypointDTO,
  WaypointDetailsDTO,
} from "@services/dtos/waypoints/waypoint.dtos.js"

export interface IWaypointsService {
  getWithChildrenById: (id: number) => Promise<WaypointDTO | null>
  getDetailsByIdAndTable: (
    id: number,
    tableName: WaypointTableName
  ) => Promise<WaypointDetailsDTO | null>
}
