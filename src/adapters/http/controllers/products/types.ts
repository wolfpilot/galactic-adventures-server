import type { Request, NextFunction } from "express"

// Types
import type { ControllerResponse } from "../types.js"
import type { Adventure } from "@entities/products/adventures.entities.js"

export type AdventuresGetByIdRequest = Request<{
  id: string
}>
export type AdventuresGetByIdResponse = ControllerResponse<{
  adventure: Adventure | null
}>

export type AdventuresGetById = (
  req: AdventuresGetByIdRequest,
  res: AdventuresGetByIdResponse,
  next: NextFunction
) => Promise<AdventuresGetByIdResponse | void>
