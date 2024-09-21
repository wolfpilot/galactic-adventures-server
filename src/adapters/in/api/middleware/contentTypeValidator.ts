import type { Request, Response, NextFunction } from "express"

// Helpers
import { HttpError } from "@helpers/error.helpers.js"

export const contentTypeValidator =
  (type: string) =>
  (req: Request, _res: Response, next: NextFunction): void => {
    if (req.is(type)) return next()

    next(new HttpError("UnsupportedMediaType"))
  }
