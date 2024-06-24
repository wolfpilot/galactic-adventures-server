import type { Request, NextFunction } from "express"

// Types
import type { ControllerResponse } from "@api/controllers/types.js"
import type { AdventureDTO } from "@services/dtos/products/adventure.dtos.js"

export type AdventuresGetByIdRequest = Request<{
  id: string
}>
export type AdventuresGetByIdResponse = ControllerResponse<{
  adventure: AdventureDTO | null
}>

export type AdventuresGetById = (
  req: AdventuresGetByIdRequest,
  res: AdventuresGetByIdResponse,
  next: NextFunction
) => Promise<AdventuresGetByIdResponse | void>
