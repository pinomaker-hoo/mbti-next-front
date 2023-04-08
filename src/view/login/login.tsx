// ** Mui Imports
import { Grid, TextField, Typography, Button } from '@mui/material'

// ** Types Imports
import { UserInfo } from 'types'

interface LoginPageViewProps {
  user: UserInfo
  setUser: () => any
  login: () => any
}
const LoginPageView = ({ user, setUser, login }: LoginPageViewProps) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3">로그인</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <TextField
          sx={{ width: '80%' }}
          variant="outlined"
          label="아이디를 입력해주세요"
          value={user.id}
          name="id"
          onChange={setUser}
        />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <TextField
          sx={{ width: '80%' }}
          variant="outlined"
          type="password"
          label="패스워드를 입력해주세요"
          value={user.password}
          name="password"
          onChange={setUser}
        />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 25 }}>
        <Button variant="contained" sx={{ p: 2, width: '80%' }} onClick={login}>
          시작하기!
        </Button>
      </Grid>
    </Grid>
  )
}

export default LoginPageView
