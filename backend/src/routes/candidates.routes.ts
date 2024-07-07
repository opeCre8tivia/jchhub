import { Router } from "express"
import CandidateController from "../controllers/candidateController"

const CandidateRouter = Router()
const candidateController = new CandidateController()

CandidateRouter.route("/create").post(candidateController.addCandidate)
CandidateRouter.route("/update").post(candidateController.updateCandidate)

export default CandidateRouter
