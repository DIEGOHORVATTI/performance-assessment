import { Divider, Stack } from '@mui/material'
import { SliderCustom } from './SliderCustom'

import { useRequestSWR } from '@/hooks/useRequest'
import { useState } from 'react'

type Ranges = Array<{
  min: number
  max: number
  title: string
  subTitle: string
  backgroundColor: string
  color: string
}>

type Props = {
  color: string
}

export const SliderRequest = ({ color }: Props) => {
  const { data: launch } = useRequestSWR<Ranges>({ url: `/ranges` })

  const [value, setValue] = useState<number>(0)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  console.log(launch)
  console.log(value)

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="flex-start"
      divider={
        <Divider orientation="vertical" sx={{ backgroundColor: '#047835', width: 2, height: 50 }} />
      }
    >
      <SliderCustom marks={mockMarks} value={value} onChange={handleChange} fill={color} />
    </Stack>
  )
}

// 16.66*6 = 100
const mockMarks = [
  { value: 16, label: '1' },
  { value: 33, label: '2' },
  { value: 50, label: '3' },
  { value: 66, label: '4' },
  { value: 83, label: '5' },
  { value: 100, label: '6' },
]
