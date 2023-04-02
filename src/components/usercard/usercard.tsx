// ** Mui Imports
import { Card, Grid, Typography } from '@mui/material'

// ** Types Importt
import { MbtiData } from 'types'

interface UserCardView {
  mbtiData: MbtiData
}

const UserCardView = ({ mbtiData }: UserCardView) => {
  return (
    <Card sx={{ p: 2, borderRadius: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">{mbtiData.mbti}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{mbtiData.text}</Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          <Typography variant="h6">{mbtiData.name}</Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

export default UserCardView
