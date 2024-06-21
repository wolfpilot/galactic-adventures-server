// Types
import type {
  WaypointsRow,
  Waypoint,
} from "@entities/waypoints/waypoints.entities.js"

export type WaypointsGetByIdResponse = Waypoint & {
  children: Pick<
    WaypointsRow,
    "id" | "code" | "name" | "category" | "is_destination"
  >[]
}

export type WaypointsGetById = ({
  id,
}: {
  id: number
}) => Promise<WaypointsGetByIdResponse | null>
