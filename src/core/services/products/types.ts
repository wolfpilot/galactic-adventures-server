// Types
import type { ProductType } from "@ts/products.types.js"
import type { ProductDTO, AdventureDTO } from "@services/dtos/products.dtos.js"

export interface ProductsService {
  getByTypeAndId: ({
    type,
    id,
  }: {
    type: ProductType
    id: number
  }) => Promise<ProductDTO | null>
}

export interface AdventuresService {
  getWithWaypointById: (id: number) => Promise<AdventureDTO | null>
}
