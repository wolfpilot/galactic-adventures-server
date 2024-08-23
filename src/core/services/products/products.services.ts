// Types
import type { AdventuresRepositoryPort } from "@ports/adventures.ports.js"
import type { ProductType } from "@ts/products.types.js"
import type { ProductsService } from "./types.js"

// Repositories
import { AdventuresRepository } from "@database/repositories/adventures.repositories.js"

export class ProductsServiceImpl implements ProductsService {
  private adventuresRepository: AdventuresRepositoryPort

  constructor() {
    this.adventuresRepository = new AdventuresRepository()
  }

  async getByTypeAndId({ type, id }: { type: ProductType; id: number }) {
    switch (type) {
      case "adventure":
        return await this.adventuresRepository.findWithWaypointById(id)
      default:
        return null
    }
  }
}
