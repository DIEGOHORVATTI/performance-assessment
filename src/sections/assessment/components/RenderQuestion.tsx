import { Divider, Stack, Typography } from '@mui/material'
import { Question } from '..'

export const RenderQuestion = ({ id, question, description }: Question) => (
  <Stack
    direction="row"
    spacing={1}
    alignItems="flex-start"
    divider={
      <Divider orientation="vertical" sx={{ backgroundColor: '#047835', width: 2, height: 50 }} />
    }
  >
    <Typography variant="h6" color="#047835" fontWeight="bold">
      {id}
    </Typography>

    <Stack direction="column" spacing={1}>
      <Typography variant="body1" color="#047835" fontWeight="bold">
        {question}
      </Typography>

      <Typography variant="body2">{description}</Typography>
    </Stack>
  </Stack>
)
