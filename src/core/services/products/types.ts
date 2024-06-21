// Types
import type { Adventure } from "@entities/products/adventures.entities.js"

export type AdventuresGetById = ({
  id,
}: {
  id: number
}) => Promise<Adventure | null>
