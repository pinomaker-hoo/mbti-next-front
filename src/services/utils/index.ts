import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

const baseUrl = '/'
const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { endpoint, getState }) => {
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
  }

  return result
}
