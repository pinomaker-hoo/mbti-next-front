// useInput
import { useState, useCallback } from 'react'

function useInput(initalValue: any) {
  // state 정의
  const [data, setData] = useState(initalValue)

  // 함수 정의
  const handler = useCallback(
    (e: any) => {
      const { value, name } = e.target
      setData({
        ...data,
        [name]: value,
      })
    },
    [data]
  )
  return [data, handler, setData]
}

export default useInput
