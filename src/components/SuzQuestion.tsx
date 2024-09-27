import { Box, Divider, Typography } from '@mui/material';

import { SliderRequest } from '@/components/SliderRequest';

export default function SuzQuestion({
  question
}: React.PropsWithChildren<{ question: string }>) {
  return (
    <Box mb={4}>
      <Typography>{question}</Typography>

      <SliderRequest />

      <Divider sx={{ mt: 2 }} color="white" />
    </Box>
  );
}
