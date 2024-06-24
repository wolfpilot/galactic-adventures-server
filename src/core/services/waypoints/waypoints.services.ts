// Types
import type { WaypointTableName } from "@entities/database.entities.js"
import type { WaypointDTO } from "@services/dtos/waypoints/waypoint.dtos.js"
import type { IWaypointsService } from "./types.js"

// Ports
import type { WaypointsRepositoryPort } from "@ports/waypoints.ports.js"

export class WaypointsService implements IWaypointsService {
  constructor(private waypointsRepository: WaypointsRepositoryPort) {}

  async getWithChildrenById(id: number) {
    const waypointsData =
      await this.waypointsRepository.findWithChildrenById(id)

    if (!waypointsData) {
      return Promise.resolve(null)
    }

    // Find the target waypoint data object
    const targetWaypoint = waypointsData.find((item) => item.id === id)

    if (!targetWaypoint?.data_source) {
      return Promise.resolve(null)
    }

    const { data_source, adventure, ...otherWaypointsData } = targetWaypoint

    // Fetch additional details for target waypoint
    const targetWaypointDetails =
      await this.waypointsRepository.findDetailsByIdAndTable(
        id,
        data_source.table_name
      )

    // Parse data
    const childrenData = waypointsData
      .filter((item) => item.id !== id)
      .map((item) => ({
        id: item.id,
        code: item.code,
        name: item.name,
        category: item.category,
        adventure: item.adventure[0] ?? null,
      }))

    const payload = {
      ...otherWaypointsData,
      details: targetWaypointDetails,
      adventure: adventure[0] ?? null,
      children: childrenData,
    } as WaypointDTO

    return Promise.resolve(payload)
  }

  async getDetailsByIdAndTable(id: number, tableName: WaypointTableName) {
    return await this.waypointsRepository.findDetailsByIdAndTable(id, tableName)
  }
}
