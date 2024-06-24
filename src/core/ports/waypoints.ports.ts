// Types
import type { WaypointTableName } from "@entities/database.entities.js"
import type {
  WaypointDTO,
  WaypointDetailsDTO,
} from "@database/repositories/dtos/waypoints.dtos.js"

export interface WaypointsRepositoryPort {
  findWithChildrenById: (id: number) => Promise<WaypointDTO[]>
  findDetailsByIdAndTable: (
    id: number,
    tableName: WaypointTableName
  ) => Promise<WaypointDetailsDTO | null>
}
