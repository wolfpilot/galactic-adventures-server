// Types
import type { WaypointDataSources } from "@entities/waypoints.entities.js"
import type { AdventureDTOBase } from "@services/dtos/products/adventure.dtos.js"
import type { WaypointDTOBase } from "@services/dtos/waypoints/waypoint.dtos.js"

type DataSourcePartial = Pick<WaypointDataSources, "table_name">
type WaypointPartial = WaypointDTOBase & {
  data_source: DataSourcePartial | null
}

export type AdventureDTO = AdventureDTOBase & {
  waypoint: WaypointPartial | null
}
