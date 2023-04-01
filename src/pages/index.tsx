import { Grid, Typography, Button } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ ml: 14, mt: 5 }}>
        <Typography variant="h1">너 내</Typography>
        <Typography variant="h1">MBTI</Typography>
        <Typography variant="h1"> 알아??</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 45 }}>
        <Link href="/user">
          <Button
            variant="contained"
            fullWidth
            sx={{
              p: 2,
              width: '80%',
              backgroundColor: '#ffe812',
              color: 'black',
              boxShadow: 'none',
            }}
          >
            카카오톡으로 시작하기
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}
