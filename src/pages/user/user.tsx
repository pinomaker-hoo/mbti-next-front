// ** Mui Imports
import { Grid, Typography, Button } from '@mui/material'

// ** Other View Imports
import UserCard from 'components/usercard'

// ** Type Imports
import { MbtiData } from 'types'

interface UserPageView {
  mbtiData: MbtiData[]
}

const UserPageView = (props: UserPageView) => {
  const { mbtiData } = props

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h5">김인후님의 MBTI는 ENTJ이지만</Typography>
        <Typography variant="h5">사람들은 INFP라고 생각해요</Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Button variant="contained" fullWidth>
          친구들에게 공유하기!
        </Button>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {mbtiData.map((item, index) => (
            <Grid item xs={12} key={index}>
              <UserCard mbtiData={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UserPageView
