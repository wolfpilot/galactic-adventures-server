// Types
import type { Destination } from "@entities/products/adventures.entities.js"

export type DestinationsGetAll = () => Promise<Destination[] | null>

export type DestinationsGetById = ({
  id,
}: {
  id: number
}) => Promise<Destination | null>
