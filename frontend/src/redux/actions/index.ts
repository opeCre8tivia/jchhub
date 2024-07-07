import { AppDispatch } from "../store"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = "http://localhost:8080/api" //TODO move to .env file

export const _userLogin = createAsyncThunk<
  any,
  { email: string; password: string },
  { dispatch: AppDispatch }
>("login/user", async function (payload) {
  try {
    let { data } = await axios.post(`${API_URL}/login`, payload)

    if (data.payload.isError) {
      return {
        isError: true,
        message: data.payload.message
      }
    }
    return data
  } catch (error) {
    return {
      isError: true,
      message: "Error ! try again"
    }
  }
})

export const _getUserByToken = createAsyncThunk<
  any,
  { token: string },
  { dispatch: AppDispatch }
>("get/user", async function (payload) {
  try {
    let { data } = await axios.post(`${API_URL}/authenticate`, payload)
    return data
  } catch (error) {
    console.log(error)
    return {
      isError: true,
      msg: "Error ! try again"
    }
  }
})
