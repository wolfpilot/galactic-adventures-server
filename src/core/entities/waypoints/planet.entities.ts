// Types
import type { PlanetModel } from "@database/repositories/models/waypoints.models.js"
import type { ExtWayAtmospheres } from "./extension.entities.js"
import type { WaypointBase } from "./waypoint.entities.js"

export type PlanetDetails = Pick<
  PlanetModel,
  | "is_habitable"
  | "size"
  | "composition"
  | "geological_activity"
  | "diameter_km"
  | "surface_temp_avg_k"
  | "day_length_h"
  | "orbital_period_d"
  | "gravity_n"
  | "wind_speed_avg_kmh"
  | "wind_gust_max_kmh"
  | "precipitation_level"
  | "precipitation_types"
  | "weather_alerts"
> & {
  atmosphere: ExtWayAtmospheres
}

export interface Planet extends WaypointBase {
  category: "Planet"
  details: PlanetDetails | null
}
