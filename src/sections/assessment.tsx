import { Box, Divider, Stack, Typography } from '@mui/material'
import { Logo } from '../components/logo'

type Question = {
  id: number
  question: string
  description: string
}

export default function Assessment() {
  const mockQuestions: Array<Question> = [
    {
      id: 1,
      question: 'Como Avalia suas Entregas?',
      description: 'Avalie a qualidade e a quantidade de entregas realizadas.',
    },
    {
      id: 2,
      question: 'Como Avalia sua Motivação?',
      description: 'Avalie o nível de motivação e engajamento com o trabalho.',
    },
    {
      id: 3,
      question: 'Como Avalia sua Resiliência?',
      description: 'Avalie a capacidade de lidar com adversidades e superar desafios.',
    },
  ]

  const RenderQuestion = ({ id, question, description }: Question) => (
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

  return (
    <Stack direction="column">
      <Stack
        direction="row"
        alignItems="center"
        sx={{ backgroundColor: '#e3e9db', borderBottom: '1px solid #047835', p: 1 }}
      >
        <Logo width={25} height={25} />

        <Typography variant="subtitle2" color="#047835" fontWeight="bold">
          Avaliação de Performace
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        {mockQuestions.map(({ question, description, id }, index) => (
          <RenderQuestion key={index} {...{ id, question, description }} />
        ))}
      </Stack>
    </Stack>
  )
}
