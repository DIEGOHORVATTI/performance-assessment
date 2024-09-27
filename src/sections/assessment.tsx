import { Box, Stack, Typography } from '@mui/material'

export default function Assessment() {
  const mockQuestions = [
    'Você se sente confortável com o seu ambiente de trabalho?',
    'Você se sente confortável com a sua equipe de trabalho?',
    'Você se sente confortável com a sua carga de trabalho?',
  ]

  return (
    <Stack direction="column">
      <Stack direction="row" spacing={2}>
        <Typography variant="subtitle2">Avaliação de Performace</Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        {mockQuestions.map((question, index) => (
          <Box key={index} sx={{ backgroundColor: 'white', padding: 2 }}>
            <Typography variant="body1">{question}</Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}
