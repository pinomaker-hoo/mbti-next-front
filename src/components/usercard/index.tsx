// ** Other View Imports
// ** Types Imports
import { MbtiData } from 'types'

// ** View Imports
import UserCardView from 'components/usercard/usercard'

interface UserCardProps {
  mbtiData: MbtiData
}

const UserCard = ({ mbtiData }: UserCardProps) => {
  return <UserCardView mbtiData={mbtiData} />
}

export default UserCard
