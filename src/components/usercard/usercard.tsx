// ** Mui Imports
import { Card, Grid, Typography } from '@mui/material'

// ** Other Imports
import dayjs from 'dayjs'

// ** Types Importt
import { MbtiData } from 'types'

interface UserCardView {
  mbtiData: MbtiData
}

const UserCardView = ({ mbtiData }: UserCardView) => {
  return (
    <Card sx={{ px: 2, py: 1, borderRadius: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">{mbtiData.mbti}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{mbtiData.text}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">
            {dayjs(mbtiData.createdDate).format('YYYY.MM.DD HH:mm')}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <Typography variant="body1">{`${mbtiData.name}(${mbtiData.guestMbti})`}</Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

export default UserCardView
