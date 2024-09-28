import { Divider, Slider, Stack } from '@mui/material'
import { styled } from '@mui/system'

type Props = {
  color: string
}

export const SliderRequest = ({ color }: Props) => (
  <Stack
    direction="row"
    spacing={1}
    alignItems="flex-start"
    position="relative"
    divider={
      <Divider orientation="vertical" sx={{ backgroundColor: '#047835', width: 2, height: 50 }} />
    }
  >
    <SliderCustom marks step={1} min={1} max={5} defaultValue={5} fill={color} />
  </Stack>
)

const SliderCustom = styled(Slider)<{ fill: string }>(({ fill }) => ({
  color: 'white',
  height: 9,
  '& .MuiSlider-track': {
    color: fill,
  },
  '& .MuiSlider-mark[data-index="0"], & .MuiSlider-mark[data-index="4"]': {
    display: 'none',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#808080',
    height: 15,
  },
  '& .MuiSlider-thumb': {
    color: '#1dc25a',
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
}))
