'use client';

import { useEffect, useState } from 'react';

import { Box, Slider, Typography } from '@mui/material';

type Props = {
  defaultValue?: number;
  min?: number;
  max?: number;
};

export const SliderRequest = ({
  defaultValue = 50,
  min = 0,
  max = 100
}: Props) => {
  return (
    <Box width={500}>
      <h1>{JSON.stringify({ defaultValue, min, max })}</h1>
    </Box>
  );
};
