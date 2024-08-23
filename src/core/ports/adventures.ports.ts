// Types
import type { Adventure } from "@entities/products/adventure.entities.js"

export interface AdventuresRepositoryPort {
  findWithWaypointById: (id: number) => Promise<Adventure | null>
}
