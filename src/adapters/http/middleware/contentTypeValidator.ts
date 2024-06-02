import { type Request, type Response, type NextFunction } from "express"

// Helper
import { HttpError } from "@helpers/errorHelper.js"

export const contentTypeValidator =
  (type: string) =>
  (req: Request, _res: Response, next: NextFunction): void => {
    if (req.is(type)) return next()

    next(new HttpError("BadRequest"))
  }
