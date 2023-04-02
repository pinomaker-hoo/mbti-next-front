// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import {
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Button,
} from '@mui/material'

const GuestPageView = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3">너 내 MBTI 알아?</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <TextField sx={{ width: '80%' }} label="이름을 입력해주세요" />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <FormControl sx={{ textAlign: 'center', width: '80%' }}>
          <Select label="MBTI" name="mbti">
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
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <FormControl sx={{ textAlign: 'center', width: '80%' }}>
          <Select label="MBTI" name="mbti">
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
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <TextField sx={{ width: '80%' }} label="메세지를 입력해주세요" />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 15 }}>
        <Link href="/guest/result">
          <Button variant="contained" sx={{ p: 2, width: '80%' }}>
            친구에게 전달하기
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default GuestPageView
