// ** Other View Imports
import useInput from 'hooks/useInput'
import RegissterPageView from './register'

const RegissterPage = () => {
  const [user, setUser] = useInput({ name: '', mbti: '' })
  return <RegissterPageView user={user} setUser={setUser} />
}

export default RegissterPage
