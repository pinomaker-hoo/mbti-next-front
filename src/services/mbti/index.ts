import { api } from '../api'

export const mbtiApi = api
  .enhanceEndpoints({
    addTagTypes: ['Mbti'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      getMbtiList: builder.query({
        query: () => ({
          url: '/answer',
        }),
      }),
    }),
  })

export const { useGetMbtiListQuery } = mbtiApi
