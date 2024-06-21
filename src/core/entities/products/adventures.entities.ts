// Types
import type { DatabaseTables } from "@entities/database.entities.js"
import type { Waypoint } from "@entities/waypoints/waypoints.entities.js"

export type AdventuresRow = DatabaseTables["prd_adventures"]["Row"]
export type AdventureSubtypes = Pick<AdventuresRow, "description" | "price">

export type Adventure = Waypoint & {
  adventure: AdventureSubtypes
}
