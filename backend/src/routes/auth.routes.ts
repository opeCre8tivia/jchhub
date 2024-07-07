import { Router } from "express"
import AuthController from "../controllers/authController"

const AuthRouter = Router()
const authController = new AuthController()

AuthRouter.route("/login").post(authController.loginUser)
AuthRouter.route("/register").post(authController.registerUser)

export default AuthRouter
