// ** Other View Imports
import useInput from 'hooks/useInput'
import RegissterPageView from 'view/register/register'

const RegissterPage = () => {
  const [user, setUser] = useInput({ name: '', mbti: '' })
  return <RegissterPageView user={user} setUser={setUser} />
}

export default RegissterPage
