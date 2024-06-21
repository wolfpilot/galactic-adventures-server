import type { Request, NextFunction } from "express"

// Types
import type { ControllerResponse } from "../types.js"
import type { Waypoint } from "@entities/waypoints/waypoints.entities.js"

// Waypoints
export type WaypointsGetByIdRequest = Request<{
  id: string
}>
export type WaypointsGetByIdResponse = ControllerResponse<{
  waypoint: Waypoint | null
}>

export type WaypointsGetById = (
  req: WaypointsGetByIdRequest,
  res: WaypointsGetByIdResponse,
  next: NextFunction
) => Promise<WaypointsGetByIdResponse | void>
