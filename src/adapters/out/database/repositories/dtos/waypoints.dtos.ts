// Types
import type { WaypointDataSources } from "@entities/waypoints.entities.js"
import type {
  WaypointDTOBase,
  WaypointDetailsDTO,
} from "@services/dtos/waypoints/waypoint.dtos.js"
import type { Adventure } from "@entities/products.entities.js"

type DataSourcePartial = Pick<WaypointDataSources, "table_name">
type AdventurePartial = Pick<Adventure, "id" | "description" | "price"> // ?: AdventureDTOBase???

export type WaypointDTO = WaypointDTOBase & {
  data_source: DataSourcePartial | null
  adventure: AdventurePartial[]
}

export type { WaypointDetailsDTO }
