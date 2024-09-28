import { Divider, Slider, Stack } from '@mui/material'

export const SliderRequest = () => (
  <Stack
    direction="row"
    spacing={1}
    alignItems="flex-start"
    divider={
      <Divider orientation="vertical" sx={{ backgroundColor: '#047835', width: 2, height: 50 }} />
    }
    position="relative"
  >
    <Slider
      marks
      step={1}
      min={1}
      max={5}
      defaultValue={5}
      sx={{
        color: '#047835',
        '& .MuiSlider-thumb': {
          '&:before': {
            content: '""',
            position: 'absolute',
            top: -10,
            right: -50,
            width: 40,
            height: 50,
            backgroundImage: 'url("/suzano.svg")',
            transform: 'translate(-50%, -50%)',
            boxShadow: 'none',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          },
        },
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
