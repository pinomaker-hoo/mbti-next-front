// ** Next Imports
import { useRouter } from 'next/router'

// ** Other View Imports
import LoginPageView from 'view/login/login'

// ** Other Imports
import useInput from 'hooks/useInput'

// ** Api Imports
import { useLoginMutation } from 'services'

const LoginPage = () => {
  const router = useRouter()

  const [user, setUser] = useInput({ id: '', password: '' })

  const [loginApi] = useLoginMutation()

  const login = () => {
    for (const key in user) {
      if (user[key] === '') {
        alert('데이터를 전부 입력해주세요.')

        return
      }
    }

    loginApi(user)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          router.push('/user')

          return
        }

        alert(res.message)

        return
      })
      .catch((err) => console.log(err))
  }

  return <LoginPageView user={user} setUser={setUser} login={login} />
}

export default LoginPage
