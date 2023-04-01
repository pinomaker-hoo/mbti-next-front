// ** Other View Imports
// ** Types Imports
import { MbtiData } from 'types'

// ** View Imports
import UserCardView from 'components/usercard/usercard'

interface UserCardProps {
  mbtiData: MbtiData
}

const UserCard = (props: UserCardProps) => {
  const { mbtiData } = props
  return <UserCardView mbtiData={mbtiData} />
}

export default UserCard
