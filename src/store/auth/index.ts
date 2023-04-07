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
          id: payload.data.user.id,
          name: payload.data.user.name,
          mbti: payload.data.users.mbti,
        }
        state.accessToken = payload.data.accessToken
        state.refreshToken = payload.data.refreshToken
      }
    )
  },
})

export const getRefrenshToken = (state: any) => state.user.refreshToken

export default authSlice.reducer

export const { updateUser, userLogout } = authSlice.actions
