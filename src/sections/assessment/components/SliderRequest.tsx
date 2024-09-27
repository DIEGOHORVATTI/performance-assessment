import { Divider, Slider, Stack } from '@mui/material'
import { Logo } from '@/components'

export const SliderRequest = () => (
  <Stack
    direction="row"
    spacing={1}
    alignItems="flex-start"
    divider={
      <Divider orientation="vertical" sx={{ backgroundColor: '#047835', width: 2, height: 50 }} />
    }
  >
    <Logo width={50} height={50} fill="#1dc25a" />

    <Slider
      marks
      step={1}
      min={1}
      max={5}
      defaultValue={5}
      sx={{
        color: '#047835',
        '& .MuiSlider-mark[data-index="0"], & .MuiSlider-mark[data-index="4"]': {
          display: 'none',
        },
        '& .MuiSlider-mark': {
          backgroundColor: '#808080',
          height: 10,
        },
      }}
    />
  </Stack>
)
