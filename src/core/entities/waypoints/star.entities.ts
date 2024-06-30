// Types
import type { MetaStarSpectralClassesModel } from "@database/repositories/models/metadata.models.js"
import type { StarModel } from "@database/repositories/models/waypoints.models.js"
import type { ExtWayAtmospheres } from "./extension.entities.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type StarMetaSpectralClassDetails = Pick<
  MetaStarSpectralClassesModel,
  "chromacity" | "temperature_min_k" | "temperature_max_k"
>
export type StarDetails = Pick<
  StarModel,
  "spectral_class_id" | "life_cycle" | "mass"
> & {
  spectral_class: StarMetaSpectralClassDetails | null
  atmosphere: ExtWayAtmospheres
}

export interface Star extends WaypointBase {
  category: "Star"
  details: StarDetails | null
}
