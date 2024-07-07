import { Request, Response, NextFunction } from "express"

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(400).json({
    message: error.message
  })
}

export default errorHandler
