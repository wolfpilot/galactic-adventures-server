// Types
import type { AdventuresRepositoryPort } from "@ports/adventures.ports.js"
import type { WaypointsRepositoryPort } from "@ports/waypoints.ports.js"
import type { AdventuresService } from "./types.js"

// Repositories
import { WaypointsRepository } from "@database/repositories/waypoints.repositories.js"

export class AdventuresServiceImpl implements AdventuresService {
  private waypointsRepository: WaypointsRepositoryPort

  constructor(private adventuresRepository: AdventuresRepositoryPort) {
    this.waypointsRepository = new WaypointsRepository()
  }

  async getWithWaypointById(id: number) {
    const adventureData =
      await this.adventuresRepository.findWithWaypointById(id)

    if (!adventureData) {
      return Promise.resolve(null)
    }

    const { waypoint, ...otherAdventureData } = adventureData

    if (!waypoint) {
      return Promise.resolve(null)
    }

    // Fetch additional details for target waypoint
    const waypointDetailsData =
      await this.waypointsRepository.findDetailsByIdAndCat(
        waypoint.id,
        waypoint.category
      )

    // Parse data
    const payload = {
      ...otherAdventureData,
      waypoint: {
        ...waypoint,
        details: waypointDetailsData,
      },
    }

    return Promise.resolve(payload)
  }
}
