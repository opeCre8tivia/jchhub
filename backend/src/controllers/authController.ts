import { NextFunction, Request, Response } from "express"
import AuthService from "../services/auth/AuthService"
import { UserType } from "../types/types"

class AuthController {
  public registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let data: UserType = req.body
      let response = await AuthService.RegisterUser(data)
      res.status(response.statusCode).json(response)
    } catch (error) {
      return next(error)
    }
  }

  public loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password } = req.body

      let response = await AuthService.LoginUser({
        email,
        password
      })

      res.status(response.statusCode).json(response)
    } catch (error) {
      return next(error)
    }
  }
}

export default AuthController
