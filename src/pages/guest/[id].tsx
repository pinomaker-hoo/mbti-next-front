// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useEffect, useMemo } from 'react'

// ** Other view imports
import GuestPageView from 'view/guest/guest'

// ** Api Imports
import { useGetUserQuery, useSaveAnswerMutation } from 'services'

// ** Other Imports
import { isUndefined } from 'lodash'
import useInput from 'hooks/useInput'

const GuestPage = () => {
  const router = useRouter()

  const [answer, setAnswer] = useInput({
    name: '',
    mbti: '',
    text: '',
    guestMbti: '',
  })

  const { data, refetch } = useGetUserQuery(Number(router.query.id))
  const [save] = useSaveAnswerMutation()

  const name = useMemo(
    () => (isUndefined(data) ? '' : data.responseData.name),
    [data]
  )

  const regContent = () => {
    for (const key in answer) {
      if (answer[key] === '') {
        alert('데이터를 전부 입력해주세요.')

        return
      }
    }
    save({ idx: router.query.id, ...answer })
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          router.push(`/guest/result/${router.query.id}?mbti=${answer.mbti}`)

          return
        }

        alert(res.message)

        return
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    refetch()
  }, [router.isReady])

  return (
    <GuestPageView
      name={name}
      answer={answer}
      setAnswer={setAnswer}
      regContent={regContent}
    />
  )
}
export default GuestPage
