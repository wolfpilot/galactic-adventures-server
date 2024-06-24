// Types
import type { AdventuresRepositoryPort } from "@ports/adventures.ports.js"
import type { WaypointsRepositoryPort } from "@ports/waypoints.ports.js"
import type { IAdventuresService } from "./types.js"

// Repositories
import { WaypointsRepository } from "@database/repositories/waypoints.repositories.js"

export class AdventuresService implements IAdventuresService {
  private waypointsRespository: WaypointsRepositoryPort

  constructor(private adventuresRepository: AdventuresRepositoryPort) {
    this.waypointsRespository = new WaypointsRepository()
  }

  async getWithWaypointById(id: number) {
    const adventureData =
      await this.adventuresRepository.findWithWaypointById(id)

    if (!adventureData) {
      return Promise.resolve(null)
    }

    const { waypoint, ...otherAdventureData } = adventureData

    if (!waypoint?.data_source) {
      return Promise.resolve(null)
    }

    const { data_source, ...otherWaypointData } = waypoint

    // Fetch additional details for target waypoint
    const waypointDetailsData =
      await this.waypointsRespository.findDetailsByIdAndTable(
        waypoint.id,
        data_source.table_name
      )

    // Parse data
    const payload = {
      ...otherAdventureData,
      waypoint: {
        ...otherWaypointData,
        details: waypointDetailsData,
      },
    }

    return Promise.resolve(payload)
  }
}
