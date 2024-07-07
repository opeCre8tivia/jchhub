import { NextFunction, Request, Response } from "express"
import AuthService from "../services/auth/AuthService"

class AuthController {
  public loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password, dx } = req.body

      let response = await AuthService.LoginUser({
        email,
        password
      })

      res.status(200).json(response)
    } catch (error) {
      return next(error)
    }
  }
}

export default AuthController
