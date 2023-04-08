/* eslint-disable */
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'
import { updateToken, userLogout } from 'store/auth'

const baseUrl = 'http://mbti.pinodev.shop:8080/api'
const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { endpoint, getState }: any) => {
    const {
      auth: { accessToken },
    } = getState()

    console.log(getState())
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }

    return headers
  },
  baseUrl,
})

const mutex = new Mutex()
export const customFetchBase = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const {
          auth: {
            user: { refreshToken, accessToken },
          },
        } = api.getState()

        const { data }: any = await baseQuery(
          {
            url: '/user/token',
            method: 'POST',
            body: { refreshToken, accessToken },
          },
          api,
          extraOptions
        )
        if (data.status === 200) {
          const { accessToken, refreshToken } = data.responseData
          api.dispatch(updateToken({ accessToken, refreshToken }))
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(userLogout())
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
