import { UserType } from "../../types/types"
import { prisma } from "../../server"
import bcrypt from "bcryptjs"
import JwtManager from "../../utils/jwtManager"

interface FormDataType {
  email: string
  password: string
}

class AuthService {
  public static RegisterUser = async ({
    first_name,
    last_name,
    email,
    password
  }: UserType) => {
    try {
      /**
       * check if user with this email exists
       */

      let user = await prisma.user.findFirst({
        where: {
          email
        }
      })

      if (user) {
        return {
          isError: true,
          statusCode: 400,
          message: "Account already exists",
          payload: null
        }
      }

      //hash password
      let salt = await bcrypt.genSaltSync(10)
      let hash = await bcrypt.hashSync(password, salt)

      //
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hash,
          first_name,
          last_name
        },
        select: {
          first_name: true,
          last_name: true
        }
      })

      return {
        isError: false,
        statusCode: 200,
        message: "Account created successfully",
        payload: newUser
      }
    } catch (error) {
      console.log(error, "------->errrr")
      return {
        isError: true,
        statusCode: 400,
        message: "Error creating account",
        payload: null
      }
    }
  }

  public static LoginUser = async ({ email, password }: FormDataType) => {
    try {
      //check if account exists
      let user = await prisma.user.findFirst({
        where: {
          email
        }
      })

      if (!user) {
        return {
          isError: true,
          statusCode: 400,
          message: "Account does not exist",
          payload: null
        }
      }

      //
      let _data = {
        id: user.id
      }

      let token = await JwtManager.generateJWT(_data)

      return {
        isError: false,
        statusCode: 200,
        message: "User logged in successfully",
        payload: token
      }
    } catch (error) {
      return {
        isError: true,
        statusCode: 400,
        message: "Error login in user",
        payload: null
      }
    }
  }
}

export default AuthService
