// ** Mui Imports
import { Grid, Typography, Button } from '@mui/material'

// ** Other View Imports
import UserCard from 'components/usercard'

// ** Type Imports
import { MbtiData } from 'types'

interface UserPageView {
  mbtiData: MbtiData[]
  name: string
  mbti: string
  mostMbti: string
}

const UserPageView = ({ mbtiData, name, mbti, mostMbti }: UserPageView) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h5">
          {`${name}님의 MBTI는 ${mbti}이지만`}
        </Typography>
        <Typography variant="h5">{`사람들 ${mostMbti}라고 생각해요`}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Button variant="contained" sx={{ width: '80%' }}>
          친구들에게 공유하기!
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3} sx={{ p: 3 }}>
          {mbtiData?.length > 0 ? (
            mbtiData?.map((item, index) => (
              <Grid item xs={12} key={index}>
                <UserCard mbtiData={item} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography variant="body1" sx={{ color: 'primary.main' }}>
                아직 친구들의 응답이 없네요!
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.main' }}>
                다른 친구들에게 공유를 해볼까요?
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UserPageView
