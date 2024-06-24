// Types
import type { AdventureDTO } from "@services/dtos/products/adventure.dtos.js"

export interface IAdventuresService {
  getWithWaypointById: (id: number) => Promise<AdventureDTO | null>
}
