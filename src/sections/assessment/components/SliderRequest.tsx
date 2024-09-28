import { Divider, Slider, Stack } from '@mui/material'
import { styled } from '@mui/system'

import { useRequestSWR } from '@/hooks/use-request'

type Props = {
  color: string
}

export const SliderRequest = ({ color }: Props) => {
  const { data: launch, isLoading } = useRequestSWR<any>({
    url: `/route`,
  })

  console.log(launch, isLoading)

  return (
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
}

// TODO: Quando uma nova versão do MUI for lançada, remover o SliderCustom e usar slotProps thumb do Slider
/**
 * @title Nota da Customização
 * @description o componente SliderCustom só existe pois a entrada do thumb está com problemas de renderização
 *
 *  slotProps={{
 *   thumb: {
 *    children: <Logo />,
 *   },
 *  }}
 *
 * Isso acima deveria funcionar mas não está funcionando, então foi necessário criar um componente customizado
 */
const SliderCustom = styled(Slider)<{ fill: string }>(({ fill }) => ({
  color: 'white',
  height: 9,
  '& .MuiSlider-track': {
    color: fill,
  },
  // Hide first and last marker
  '& .MuiSlider-mark[data-index="0"], & .MuiSlider-mark[data-index="4"]': {
    display: 'none',
  },
  // Maker divider
  '& .MuiSlider-mark': {
    backgroundColor: '#808080',
    height: 15,
  },
  '& .MuiSlider-thumb': {
    color: '#1dc25a',
    // Marker Icon Suzano
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
