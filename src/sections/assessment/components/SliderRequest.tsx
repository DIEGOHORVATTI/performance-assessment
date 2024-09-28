import { Skeleton, Stack, Typography } from '@mui/material'
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
  const { data: launch, isLoading } = useRequestSWR<Ranges>({ url: `/ranges` })

  const [value, setValue] = useState<number>(0)

  const handleChange = (_event: Event, newValue: number | number[]) => setValue(newValue as number)

  const getCurrentRange = (value: number) => {
    return launch?.find((range) => value >= range.min && value <= range.max)
  }

  const currentRange = getCurrentRange(value)

  return (
    <Stack direction="column" spacing={2}>
      <SliderCustom marks={mockMarks} value={value} onChange={handleChange} fill={color} />

      {isLoading && (
        <>
          <Skeleton sx={{ width: '100%' }} height={30} />

          <Skeleton sx={{ width: '100%' }} height={40} />
        </>
      )}

      {!isLoading && (
        <>
          <Typography
            gutterBottom
            variant="subtitle1"
            align="center"
            fontWeight="bold"
            color={color}
          >
            <i>{currentRange?.title}</i>
          </Typography>

          <Typography variant="caption" align="center" color="text.secondary" minHeight={40}>
            {currentRange?.subTitle}
          </Typography>
        </>
      )}
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
