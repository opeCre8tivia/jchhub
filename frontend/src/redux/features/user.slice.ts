import { createSlice } from "@reduxjs/toolkit"
import { UserType } from "../../types/types"
import { _getUserByToken, _userLogin } from "../actions"
import { keys } from "../../constants/localStorageKeys"

interface InitialStateType {
  loading: boolean
  isSuccess: boolean
  isError: boolean
  msg: string
  token: string | null
  isAuthenticated: boolean
  user: UserType | null
}

const initialState: InitialStateType = {
  loading: false,
  isSuccess: false,
  isError: false,
  msg: "",
  token: null,
  isAuthenticated: false,
  user: null
}

export const userSlice = createSlice({
  name: "user_slice",
  initialState: initialState,
  reducers: {
    clearUserLoginState: (state) => {
      state.isError = false
      state.isSuccess = false
      state.msg = ""
    },
    logoutUser: (state) => {
      localStorage.removeItem(keys.ACCESS_TOKEN_KEY)
      state.token = null
      state.isAuthenticated = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(_userLogin.pending, (state) => {
      state.loading = true
    })

    builder.addCase(_userLogin.fulfilled, (state, action) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
      state.token = !action.payload.isError && action.payload.payload
      if (!action.payload.isError) {
        //store token in local storage
        localStorage.setItem(keys.ACCESS_TOKEN_KEY, action.payload.payload)
      }
    })

    builder.addCase(_userLogin.rejected, (state, action: any) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
    })

    builder.addCase(_getUserByToken.pending, (state) => {
      state.loading = true
    })

    builder.addCase(_getUserByToken.fulfilled, (state, action) => {
      state.loading = false
      state.isError = action.payload.isError
      if (!action.payload.isError) {
        let _user = action.payload.payload
        state.user = _user
        state.isAuthenticated = true
      }
    })

    builder.addCase(_getUserByToken.rejected, (state, action: any) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
    })
  }
})

export const { clearUserLoginState, logoutUser } = userSlice.actions
export default userSlice.reducer
