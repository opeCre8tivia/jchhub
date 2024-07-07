import { NextFunction, Request, Response } from "express"
import { CandidateType } from "../types/types"
import CandidateService from "../services/candidates/candidateService"

class CandidateController {
  public addCandidate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let data: CandidateType = req.body
      let response = await CandidateService.AddCandidate(data)
      res.status(response.statusCode).json(response)
    } catch (error) {
      return next(error)
    }
  }

  public updateCandidate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data: CandidateType = req.body

      let response = await CandidateService.UpdateCandidate(data)

      res.status(response.statusCode).json(response)
    } catch (error) {
      return next(error)
    }
  }
}

export default CandidateController
