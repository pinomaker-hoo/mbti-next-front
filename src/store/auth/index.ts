// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

// ** Api Imports
import { authApi } from 'services'

const initialState = {
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

export const getRefrenshToken = (state: any) => state.user.refreshToken

export default authSlice.reducer

export const { updateToken, userLogout } = authSlice.actions
