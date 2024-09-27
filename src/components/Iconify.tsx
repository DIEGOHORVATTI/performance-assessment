import { Stack, StackProps } from '@mui/material'
import { Icon, IconifyIcon } from '@iconify/react'

interface Props extends StackProps {
  icon: IconifyIcon | string
  size?: number
  name?: string
}

export const Iconify = ({ icon, size = 2, sx, name, ...other }: Props) => {
  return <Stack component={Icon} icon={icon} sx={{ ...sx, fontSize: size * 10 }} {...other} />
}
