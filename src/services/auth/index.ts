import { api } from '../api'

export const authApi = api
  .enhanceEndpoints({
    addTagTypes: ['Auth'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      register: builder.mutation({
        query: (args) => ({
          url: '/user',
          method: 'POST',
          body: args,
        }),
      }),
      login: builder.mutation({
        query: (args) => ({
          url: '/user/login',
          method: 'POST',
          body: args,
        }),
      }),
      getUser: builder.query({
        query: (idx) => ({
          url: `/user/${idx}`,
        }),
      }),
    }),
  })

export const { useRegisterMutation, useLoginMutation, useLazyGetUserQuery } =
  authApi
