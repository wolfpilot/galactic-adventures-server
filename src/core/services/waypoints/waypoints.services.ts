// Types
import type { WaypointCategory } from "@database/repositories/models/database.models.js"
import type { WaypointsRepositoryPort } from "@ports/waypoints.ports.js"
import type { WaypointsService } from "./types.js"

export class WaypointsServiceImpl implements WaypointsService {
  constructor(private waypointsRepository: WaypointsRepositoryPort) {}

  async getTopParentId() {
    return await this.waypointsRepository.findTopParentId()
  }

  async getDetailsByIdAndCat(id: number, cat: WaypointCategory) {
    return await this.waypointsRepository.findDetailsByIdAndCat(id, cat)
  }

  async getWithChildrenById(id: number) {
    return await this.waypointsRepository.findWithChildrenById(id)
  }
}
