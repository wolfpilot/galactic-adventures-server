// Types
import type { AdventureDTO } from "@services/dtos/products.dtos.js"

export interface AdventuresService {
  getWithWaypointById: (id: number) => Promise<AdventureDTO | null>
}
