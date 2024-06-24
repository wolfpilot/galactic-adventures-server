// Types
import type { MetaStarClasses } from "@entities/metadata.entities.js"
import type { Star } from "@entities/waypoints.entities.js"
import type { WaypointDTOBase } from "./waypoint.dtos.js"

export type StarMetaClassDetails = Pick<
  MetaStarClasses,
  "class" | "temperature_min_kelvin" | "temperature_max_kelvin" | "chromacity"
>
export type StarDetails = Pick<Star, "class">

export interface StarDTO extends WaypointDTOBase {
  category: "Star"
  details: StarDetails
}
