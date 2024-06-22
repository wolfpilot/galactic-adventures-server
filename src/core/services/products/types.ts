// Types
import type { Adventure } from "@entities/products/adventures.entities.js"

export type AdventuresGetByIdResponse = Adventure

export type AdventuresGetById = ({
  id,
}: {
  id: number
}) => Promise<AdventuresGetByIdResponse | null>
