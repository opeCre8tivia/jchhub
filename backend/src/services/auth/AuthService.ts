import { UserType } from "../../types/types"

interface FormDataType {
  email: string
  password: string
}

class AuthService {
  public static LoginUser = async ({
    email,
    password
  }: FormDataType): Promise<UserType> => {
    try {
      return {
        id: "xclgr",
        first_name: "Boy",
        last_name: "test",
        email: email,
        password: password
      }
    } catch (error) {
      throw new Error("Error login in user")
    }
  }
}

export default AuthService
