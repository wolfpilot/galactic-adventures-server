// Types
import type {
  WaypointBase,
  WaypointAdventurePartial,
  WaypointDetails,
  Waypoint,
} from "@entities/waypoints/waypoint.entities.js"

export type WaypointDataRaw = WaypointBase & {
  adventure: WaypointAdventurePartial[]
}

export class WaypointMapper {
  static toEntity({
    targetWaypointData,
    otherWaypointsData,
    detailsData,
  }: {
    targetWaypointData: WaypointDataRaw
    otherWaypointsData: WaypointDataRaw[]
    detailsData: WaypointDetails | null
  }): Waypoint {
    const { adventure, ...otherWaypointData } = targetWaypointData

    const childrenData = otherWaypointsData.map((item) => ({
      id: item.id,
      code: item.code,
      name: item.name,
      category: item.category,
      adventure: item.adventure[0] ?? null,
    }))

    const payload = {
      ...otherWaypointData,
      details: detailsData,
      adventure: adventure[0] ?? null,
      children: childrenData,
    } as Waypoint

    return payload
  }
}
