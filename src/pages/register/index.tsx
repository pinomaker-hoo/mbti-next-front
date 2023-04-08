// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useState } from 'react'

// ** Other View Imports
import RegissterPageView from 'view/register/register'

// ** Api Imports
import { useRegisterMutation } from 'services'

// ** Other Imports
import useInput from 'hooks/useInput'

const RegissterPage = () => {
  const router = useRouter()

  const [user, setUser] = useInput({ name: '', mbti: '', id: '', password: '' })
  const [passwordC, setPasswordC] = useState<string>('')

  const [register] = useRegisterMutation()

  const handlePasswordC = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordC(e.target.value)
  }

  const regContent = () => {
    for (const key in user) {
      if (user[key] === '') {
        alert('데이터를 전부 입력해주세요.')

        return
      }
    }

    if (user.password !== passwordC) {
      alert('패스워드를 확인해주세요.')

      return
    }

    register(user)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          router.push('/login')

          return
        }

        alert(res.message)

        return
      })
      .catch((err) => console.log(err))
  }

  return (
    <RegissterPageView
      user={user}
      setUser={setUser}
      regContent={regContent}
      passwordC={passwordC}
      handlePasswordC={handlePasswordC}
    />
  )
}

export default RegissterPage
