import { Divider, Slider, Stack } from '@mui/material'

export const SliderRequest = () => (
  <Stack
    direction="row"
    spacing={1}
    alignItems="flex-start"
    divider={
      <Divider orientation="vertical" sx={{ backgroundColor: '#047835', width: 2, height: 50 }} />
    }
  >
    <Slider
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
      defaultValue={5}
      step={1}
      marks
      min={1}
      max={5}
    />
  </Stack>
)
