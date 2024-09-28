import { Box, Container } from '@mui/material'

import Assessment from '@/sections/assessment'

export default function Home() {
  return (
    <Box component="main" sx={{ backgroundColor: '#f1efe8', color: '#000' }}>
      <Container maxWidth="lg">
        <Assessment />
      </Container>
    </Box>
  )
}
