// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

// ** Api Imports
import { authApi } from 'services'
import { RootState } from 'store'

interface AuthType {
  user: {
    id: string
    name: string
    mbti: string
  }
  accessToken: string
  refreshToken: string
}

const initialState: AuthType = {
  user: {
    id: '',
    name: '',
    mbti: '',
  },
  accessToken: '',
  refreshToken: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateToken: (state, { payload }) => {
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
    },
    userLogout: (state) => {
      state = initialState
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = {
          id: payload.responseData.name,
          name: payload.responseData.name,
          mbti: payload.responseData.mbti,
        }
        state.accessToken = payload.responseData.accessToken
        state.refreshToken = payload.responseData.refreshToken
      }
    )
  },
})

export const getMbtiAndName = (state: RootState) => ({
  name: state.auth.user.name,
  mbti: state.auth.user.mbti,
})

export default authSlice.reducer

export const { updateToken, userLogout } = authSlice.actions
