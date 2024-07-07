import { prisma } from "../../server"
import { CandidateType } from "../../types/types"

class CandidateService {
  public static AddCandidate = async ({
    first_name,
    last_name,
    email,
    phone_number,
    call_time,
    comment,
    github_profile_url,
    linkedin_profile_url,
    user_id
  }: CandidateType) => {
    try {
      //check if candidate already exists

      const candidate = await prisma.candidate.findFirst({
        where: {
          email
        }
      })

      if (candidate) {
        return {
          isError: true,
          statusCode: 400,
          message: "Candidate already exists",
          payload: null
        }
      }

      const newCandidate = await prisma.candidate.create({
        data: {
          first_name,
          last_name,
          email,
          phone_number,
          comment,
          call_time,
          github_profile_url,
          linkedin_profile_url,
          user_id
        }
      })

      return {
        isError: false,
        statusCode: 200,
        message: "Candidate added successfully",
        payload: newCandidate
      }
    } catch (error) {
      return {
        isError: true,
        statusCode: 400,
        message: "Error adding candidate",
        payload: null
      }
    }
  }

  public static UpdateCandidate = async ({
    first_name,
    last_name,
    email,
    phone_number,
    call_time,
    comment,
    github_profile_url,
    linkedin_profile_url,
    id
  }: CandidateType) => {
    try {
      const updatedCandidate = await prisma.candidate.update({
        where: {
          id
        },
        data: {
          first_name,
          last_name,
          email,
          phone_number,
          comment,
          call_time,
          github_profile_url,
          linkedin_profile_url
        }
      })

      return {
        isError: false,
        statusCode: 200,
        message: "Candidate updated successfully",
        payload: updatedCandidate
      }
    } catch (error) {
      return {
        isError: true,
        statusCode: 400,
        message: "Error updating candidate",
        payload: null
      }
    }
  }
}

export default CandidateService
