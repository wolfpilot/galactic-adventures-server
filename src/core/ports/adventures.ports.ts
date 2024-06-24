// Types
import type { AdventureDTO } from "@database/repositories/dtos/adventures.dtos.js"

export interface AdventuresRepositoryPort {
  findWithWaypointById: (id: number) => Promise<AdventureDTO | null>
}
