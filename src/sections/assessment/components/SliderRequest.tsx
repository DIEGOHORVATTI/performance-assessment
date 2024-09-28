import { Divider, Stack } from '@mui/material'
import { SliderCustom } from './SliderCustom'

import { useRequestSWR } from '@/hooks/useRequest'

type Props = {
  color: string
}

export const SliderRequest = ({ color }: Props) => {
  const { data: launch, isLoading } = useRequestSWR<any>({
    url: `/ranges`,
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
