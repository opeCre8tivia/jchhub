import { Request, Response } from "express"
import AuthService from "../services/auth/AuthService"

class AuthController {
  public loginUser = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body
      console.log(email, password)

      let response = await AuthService.LoginUser({
        email,
        password
      })

      res.status(200).json(response)
    } catch (error) {
      console.log(error)
      res.status(400).json({
        isError: true
      })
    }
  }
}

export default AuthController
