import type { Request, NextFunction } from "express"

// Types
import type { ControllerResponse } from "@api/controllers/types.js"
import type { WaypointDTO } from "@services/dtos/waypoints.dtos.js"

// Waypoints
export type WaypointsGetByIdRequest = Request<{
  id: string
}>
export type WaypointsGetByIdResponse = ControllerResponse<WaypointDTO | null>

export type WaypointsGetById = (
  req: WaypointsGetByIdRequest,
  res: WaypointsGetByIdResponse,
  next: NextFunction
) => Promise<WaypointsGetByIdResponse | void>
