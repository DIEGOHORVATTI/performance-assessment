'use client'

import { Box, Button, Divider, Grid2 as Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'

import { Logo, Iconify } from '@/components'
import { QuestionBlock } from './components/QuestionBlock'
import { SliderRequest } from './components/SliderRequest'

export type Question = {
  id: number
  color: string
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

      <Box sx={{ pl: 2, pr: 5 }}>
        <Stack direction="column" spacing={6} divider={<DividerCustom />}>
          {mockQuestions.map(({ color, ...props }, index) => (
            <Grid container key={index} spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <QuestionBlock key={index} color={color} {...props} />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <SliderRequest color={color} />
              </Grid>
            </Grid>
          ))}
        </Stack>

        <DividerCustom sx={{ my: 4 }} />

        <Stack justifyContent="center" alignItems="center">
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
      </Box>
    </Stack>
  )
}

const mockQuestions: Array<Question> = [
  {
    id: 1,
    color: '#1dc25a',
    question: 'Como Avalia suas Entregas?',
    description: 'Avalie a qualidade e a quantidade de entregas realizadas.',
  },
  {
    id: 2,
    color: '#469953',
    question: 'Como Avalia sua Motivação?',
    description: 'Avalie o nível de motivação e engajamento com o trabalho.',
  },
  {
    id: 3,
    color: '#32743b',
    question: 'Como Avalia sua Resiliência?',
    description: 'Avalie a capacidade de lidar com adversidades e superar desafios.',
  },
]

const DividerCustom = styled(Divider)({
  borderColor: '#1dc25a',
  borderStyle: 'dashed',
  opacity: 0.5,
})
