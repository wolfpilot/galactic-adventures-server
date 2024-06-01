import { type Request, type Response, type NextFunction } from "express"

export const contentTypeValidator =
  (type: string) =>
  (req: Request, _res: Response, next: NextFunction): void => {
    if (req.is(type)) return next()

    next(new Error("Unsupported content type"))
  }
