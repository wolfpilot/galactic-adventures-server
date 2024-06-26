// Types
import type { MetaStarClassesModel } from "@database/repositories/models/metadata.models.js"
import type { StarModel } from "@database/repositories/models/waypoints.models.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type StarMetaClassDetails = Pick<
  MetaStarClassesModel,
  "temperature_min_kelvin" | "temperature_max_kelvin" | "chromacity"
>
export type StarDetails = Pick<StarModel, "class"> & {
  meta_star_class: StarMetaClassDetails | null
}

export interface Star extends WaypointBase {
  category: "Star"
  details: StarDetails
}
