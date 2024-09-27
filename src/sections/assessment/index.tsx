'use client'

import { Button, Divider, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'

import { Logo, Iconify } from '@/components'
import { RenderQuestion } from './components/RenderQuestion'

export type Question = {
  id: number
  question: string
  description: string
}

export default function Assessment() {
  const headerEvaluation = (
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
  )

  return (
    <Stack direction="column" spacing={4}>
      {headerEvaluation}

      <Stack direction="column" spacing={4} divider={<DividerCustom />}>
        {mockQuestions.map(({ question, description, id }, index) => (
          <RenderQuestion key={index} {...{ id, question, description }} />
        ))}
      </Stack>

      <DividerCustom />

      <Stack justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<Iconify icon="mdi:arrow-right" />}
          sx={{
            backgroundColor: '#1dc25a',
            borderRadius: 2,
            fontWeight: 'bold',
            fontFamily: 'Arial',
          }}
        >
          ENVIAR
        </Button>
      </Stack>
    </Stack>
  )
}

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

const DividerCustom = styled(Divider)({
  borderColor: '#1dc25a',
  borderStyle: 'dashed',
  opacity: 0.5,
})
