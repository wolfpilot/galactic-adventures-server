// Types
import type {
  WaypointBase,
  Waypoint,
} from "@entities/waypoints/waypoints.entities.js"

export type WaypointChildData = Omit<WaypointBase, "parent_id">

export type WaypointsGetByIdResponse = Waypoint & {
  children: WaypointChildData[]
}

export type WaypointsGetById = ({
  id,
}: {
  id: number
}) => Promise<WaypointsGetByIdResponse | null>
