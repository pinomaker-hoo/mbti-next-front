// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Grid, Typography, Button } from '@mui/material'

export default function Home() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ ml: 14, mt: 5 }}>
        <Typography variant="h1" sx={{ color: 'primary.main' }}>
          너 내
        </Typography>
        <Typography variant="h1" sx={{ color: 'primary.main' }}>
          MBTI
        </Typography>
        <Typography variant="h1" sx={{ color: 'primary.main' }}>
          알아??
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 45 }}>
        <Link href="/login" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              p: 2,
              width: '80%',
              backgroundColor: 'primary.main',
              color: 'white',
              boxShadow: 'none',
            }}
          >
            로그인 하고 시작하기!
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'right', mr: 5, mt: -5 }}>
        <Link href="/register" style={{ textDecoration: 'none' }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            계정이 아직 없다면??
          </Typography>
        </Link>
      </Grid>
    </Grid>
  )
}
