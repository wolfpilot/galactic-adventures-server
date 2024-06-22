// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { Waypoint } from "@entities/waypoints/waypoints.entities.js"

export type AdventuresRow = DatabaseTables["prd_adventures"]["Row"]
export type AdventureBase = Pick<AdventuresRow, "id" | "description" | "price">

export interface Adventure extends AdventureBase {
  waypoint: Waypoint
}
