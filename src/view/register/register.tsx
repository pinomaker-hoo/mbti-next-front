// ** Mui Imports
import {
  Grid,
  TextField,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Button,
  InputLabel,
} from '@mui/material'

// ** Types Imports
import { UserInfo } from 'types'

interface RegisterPageViewProps {
  user: UserInfo
  setUser: () => any
  regContent: () => any
  passwordC: string
  handlePasswordC: (e: React.ChangeEvent<HTMLInputElement>) => any
}
const RegissterPageView = ({
  user,
  setUser,
  regContent,
  passwordC,
  handlePasswordC,
}: RegisterPageViewProps) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3">회원가입</Typography>
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
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <TextField
          sx={{ width: '80%' }}
          variant="outlined"
          type="password"
          label="패스워드 체크를 입력해주세요"
          value={passwordC}
          onChange={handlePasswordC}
        />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <TextField
          sx={{ width: '80%' }}
          variant="outlined"
          label="이름을 입력해주세요"
          value={user.name}
          name="name"
          onChange={setUser}
        />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <FormControl sx={{ textAlign: 'center', width: '80%' }}>
          <InputLabel id="mbti">나의 MBTI는?</InputLabel>
          <Select
            labelId="mbti"
            label="나의 MBTI는?"
            value={user.mbti}
            name="mbti"
            onChange={setUser}
          >
            <MenuItem value="INTJ">INTJ</MenuItem>
            <MenuItem value="INTP">INTP</MenuItem>
            <MenuItem value="ENTJ">ENTJ</MenuItem>
            <MenuItem value="ENTP">ENTP</MenuItem>
            <MenuItem value="INFJ">INFJ</MenuItem>
            <MenuItem value="INFP">INFP</MenuItem>
            <MenuItem value="ENFJ">ENFJ</MenuItem>
            <MenuItem value="ENFP">ENFP</MenuItem>
            <MenuItem value="ISTJ">ISTJ</MenuItem>
            <MenuItem value="ISFJ">ISFJ</MenuItem>
            <MenuItem value="ESTJ">ESTJ</MenuItem>
            <MenuItem value="ESFJ">ESFJ</MenuItem>
            <MenuItem value="ISTP">ISTP</MenuItem>
            <MenuItem value="ISFP">ISFP</MenuItem>
            <MenuItem value="ESTP">ESTP</MenuItem>
            <MenuItem value="ESFP">ESFP</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 10 }}>
        <Button
          variant="contained"
          sx={{ p: 2, width: '80%' }}
          onClick={regContent}
        >
          회원가입
        </Button>
      </Grid>
    </Grid>
  )
}

export default RegissterPageView
