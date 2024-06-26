// Types
import type { MetaStarClasses } from "@entities/metadata.entities.js"
import type { Star } from "@entities/waypoints.entities.js"
import type { WaypointDTOBase } from "./waypoint.dtos.js"

export type StarMetaClassDetails = Pick<
  MetaStarClasses,
  "temperature_min_kelvin" | "temperature_max_kelvin" | "chromacity"
>
export type StarDetails = Pick<Star, "class"> & {
  meta_star_class: StarMetaClassDetails | null
}

export interface StarDTO extends WaypointDTOBase {
  category: "Star"
  details: StarDetails
}
