import jwt from "jsonwebtoken"

class JwtManager {
  public static generateJWT = async (userInfo: object) => {
    const token = await jwt.sign(userInfo, `1MillionUsers`) //TODO move hash key to .env file
    return token
  }

  public static decodeJWT = async (token: string) => {
    const result = await jwt.decode(token, `1MillionUsers`)
    return result
  }
}

export default JwtManager
