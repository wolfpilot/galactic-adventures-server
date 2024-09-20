import type { Response } from "express"

// Helpers
import { HttpError } from "@helpers/error.helpers.js"

export type ControllerError = HttpError

export interface ControllerSuccess<T = void> {
  ok: boolean
  message?: string
  data?: T
}

export type ControllerResponse<T = void> = Response<
  ControllerSuccess<T> | ControllerError
>
