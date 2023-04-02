// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Grid, Typography, Button } from '@mui/material'

const GuestResultPageView = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3">너 내 MBTI 알아?</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h5">김인후님의 MBTI는 ENTJ이지만</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h5">사람들은 INFP라고 생각해요!</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h5">당신이 고른 MBTI는 ENFP 입니다!</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 15 }}>
        <Link href="/">
          <Button variant="contained" sx={{ p: 2, width: '80%' }}>
            나도 해보기
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default GuestResultPageView
