import { Box, Stack, Typography } from '@mui/material'
import { Logo } from '../components/logo'

export default function Assessment() {
  const mockQuestions = [
    'Você se sente confortável com o seu ambiente de trabalho?',
    'Você se sente confortável com a sua equipe de trabalho?',
    'Você se sente confortável com a sua carga de trabalho?',
  ]

  return (
    <Stack direction="column">
      <Stack
        direction="row"
        alignItems="center"
        sx={{ backgroundColor: '#e3e9db', borderBottom: '1px solid #047835', p: 1 }}
      >
        <Logo width={30} height={30} />

        <Typography variant="h6" color="#047835" fontWeight="bold">
          Avaliação de Performace
        </Typography>
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
