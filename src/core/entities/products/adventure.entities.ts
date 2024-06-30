// Types
import type { AdventureModel } from "@database/repositories/models/products.models.js"
import type { WaypointBase } from "@entities/waypoints/waypoint.entities.js"

export type AdventureBase = Pick<
  AdventureModel,
  "id" | "description" | "price_sb"
>

export type Adventure = AdventureBase & {
  waypoint: WaypointBase | null
}
