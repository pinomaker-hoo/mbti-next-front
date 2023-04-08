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
  InputLabel,
} from '@mui/material'
import { Answer } from 'types'

interface GuestPageViewProps {
  name: string
  setAnswer: () => void
  answer: Answer
  regContent: () => any
}
const GuestPageView = ({
  name,
  answer,
  setAnswer,
  regContent,
}: GuestPageViewProps) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3">너 {name}의 MBTI 알아?</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <TextField
          sx={{ width: '80%' }}
          label="이름을 입력해주세요"
          name="name"
          value={answer.name}
          onChange={setAnswer}
        />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <FormControl sx={{ textAlign: 'center', width: '80%' }}>
          <InputLabel id="mbti">{name}의 MBTI는?</InputLabel>
          <Select
            labelId="mbti"
            label="나의 MBTI는?"
            name="mbti"
            value={answer.mbti}
            onChange={setAnswer}
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
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <FormControl sx={{ textAlign: 'center', width: '80%' }}>
          <InputLabel id="mbti">당신의 MBTI는?</InputLabel>
          <Select
            labelId="mbti"
            label="당신의 MBTI는?"
            name="guestMbti"
            value={answer.guestMbti}
            onChange={setAnswer}
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
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <TextField
          sx={{ width: '80%' }}
          label={`${name}에게 메세지를 입력해주세요`}
          value={answer.text}
          name="text"
          onChange={setAnswer}
        />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 15 }}>
        <Button
          variant="contained"
          sx={{ p: 2, width: '80%' }}
          onClick={regContent}
        >
          친구에게 전달하기
        </Button>
      </Grid>
    </Grid>
  )
}

export default GuestPageView
