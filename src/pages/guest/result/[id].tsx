// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useMemo, useCallback, useEffect, useState } from 'react'

// ** Other View Imports
import GuestResultPageView from 'view/guest/guestResult'

// ** Api Imports
import { useGetUserQuery, useGetMbtiListQuery } from 'services'

// ** Other Imports
import { isUndefined } from 'lodash'

const GuestResultPage = () => {
  const router = useRouter()

  const [mostMbti, setMostMbti] = useState<string>('')

  const { data } = useGetUserQuery(Number(router.query.id))
  const { data: mbti } = useGetMbtiListQuery(null)

  const user = useMemo(
    () =>
      isUndefined(data)
        ? { name: '', mbti: '' }
        : { name: data.responseData.name, mbti: data.responseData.mbti },
    [data]
  )

  const mbtiData: [] = useMemo(
    () => (isUndefined(mbti) ? [] : mbti.responseData),
    [mbti]
  )

  const getMostMbti = useCallback((): string => {
    const mostMbti = mbtiData.reduce(
      (acc: any, cur: any) => ({ ...acc, [cur.mbti]: acc[cur.mbti] + 1 }),
      {
        INTJ: 0,
        INTP: 0,
        ENTJ: 0,
        ENTP: 0,
        INFJ: 0,
        INFP: 0,
        ENFJ: 0,
        ENFP: 0,
        ISTJ: 0,
        ISFJ: 0,
        ESTJ: 0,
        ESFJ: 0,
        ISTP: 0,
        ISFP: 0,
        ESTP: 0,
        ESFP: 0,
      }
    )

    let a = { name: '', count: 0 }
    for (const key in mostMbti) {
      if (a.count < mostMbti[key]) {
        a = { name: key, count: mostMbti[key] }
      }
    }

    return a.name
  }, [data])

  useEffect(() => {
    setMostMbti(getMostMbti())
  }, [])

  return (
    <GuestResultPageView
      name={user.name}
      userMbti={user.mbti}
      mostMbti={mostMbti}
      guestMbti={String(router.query.mbti)}
    />
  )
}

export default GuestResultPage
