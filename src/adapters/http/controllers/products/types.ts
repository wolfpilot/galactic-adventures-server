import { type Request, type NextFunction } from "express"

// Types
import { type ControllerResponse } from "../types.js"
import { type Destination } from "@entities/products/adventures.entities.js"

// Destinations
export type DestinationsGetAllResponse = ControllerResponse<{
  destinations: Destination[] | null
}>

export type DestinationsGetAll = (
  req: Request,
  res: DestinationsGetAllResponse,
  next: NextFunction
) => Promise<DestinationsGetAllResponse | void>

export type DestinationsGetByIdRequest = Request<{
  id: number
}>
export type DestinationsGetByIdResponse = ControllerResponse<{
  destination: Destination | null
}>

export type DestinationsGetById = (
  req: DestinationsGetByIdRequest,
  res: DestinationsGetByIdResponse,
  next: NextFunction
) => Promise<DestinationsGetByIdResponse | void>
