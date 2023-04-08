// ** React Imports
import { useCallback, useEffect, useMemo, useState } from 'react'

// ** Redux Imports
import { useGetMbtiListQuery } from 'services'
import { useSelector } from 'react-redux'

// ** Other View Imports
import UserPageView from 'view/user/user'

// ** Other Imports
import { isUndefined } from 'lodash'
import { getMbtiAndName } from 'store/auth'

const UserPage = () => {
  const [user, setUser] = useState<any>({ name: '', mbti: '', idx: 0 })
  const [copyLink, setCopyLink] = useState<string>('')
  const { mbti, name, idx } = useSelector(getMbtiAndName)

  const { data } = useGetMbtiListQuery(null)

  const mbtiData: [] = useMemo(
    () => (isUndefined(data) ? [] : data.responseData),
    [data]
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
    setUser({ name, mbti, idx })
    setCopyLink(`http://mbti.pinodev.shop:3000/guest/${idx}`)
    // setCopyLink(`http://localhost:3000/guest/${idx}`)
  }, [])

  return (
    <UserPageView
      mbtiData={mbtiData}
      name={user.name}
      mbti={user.mbti}
      copyLink={copyLink}
      mostMbti={getMostMbti()}
    />
  )
}

export default UserPage
