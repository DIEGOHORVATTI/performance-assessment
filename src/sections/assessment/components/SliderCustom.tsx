import { Slider } from '@mui/material'
import { styled } from '@mui/system'

/**
 * @title Nota sobre a Customização
 * @description o componente SliderCustom só existe pois a entrada do thumb está com problemas de renderização
 *
 *  slotProps={{
 *   thumb: {
 *    children: <Logo />,
 *   },
 *  }}
 *
 * Isso acima deveria funcionar mas não está funcionando, então foi necessário criar um componente customizado
 * @todo Quando uma nova versão do MUI for lançada, remover o SliderCustom e usar slotProps thumb do Slider
 */
export const SliderCustom = styled(Slider)<{ fill: string }>(({ fill }) => ({
  color: 'white',
  height: 9,
  // Hide labels numbers
  '& .MuiSlider-markLabel': {
    display: 'none',
  },
  '& .MuiSlider-track': {
    color: fill,
  },
  // Hide last marker
  '& .MuiSlider-mark[data-index="5"]': {
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
