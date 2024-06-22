// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { WaypointBase } from "./waypoints.entities.js"

export type StarsRow = DatabaseTables["way_stars"]["Row"]
export type MetaStarClassesRow = DatabaseTables["meta_star_classes"]["Row"]
export type StarMetaClassDetails = Pick<
  MetaStarClassesRow,
  "class" | "temperature_min_kelvin" | "temperature_max_kelvin" | "chromacity"
>
export type StarDetails = Pick<StarsRow, "class"> & {
  meta_star_class: StarMetaClassDetails
}

export interface Star extends WaypointBase {
  category: "Star"
  details: StarDetails
}
