import { Box, Container } from '@mui/material'

import Assessment from '@/sections/assessment'

export default function Home() {
  return (
    <Box component="main" sx={{ backgroundColor: '#f1efe8', color: '#000', height: '100vh' }}>
      <Container maxWidth="md">
        <Assessment />
      </Container>
    </Box>
  )
}
