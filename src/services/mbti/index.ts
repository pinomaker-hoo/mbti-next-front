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
      getMbtiListByGuest: builder.query({
        query: (idx) => ({
          url: `/answer/mbti/${idx}`,
        }),
      }),
      saveAnswer: builder.mutation({
        query: ({ idx, ...args }) => ({
          url: `/answer/mbti/${idx}`,
          method: 'POST',
          body: args,
        }),
      }),
    }),
  })

export const {
  useGetMbtiListQuery,
  useSaveAnswerMutation,
  useGetMbtiListByGuestQuery,
} = mbtiApi
