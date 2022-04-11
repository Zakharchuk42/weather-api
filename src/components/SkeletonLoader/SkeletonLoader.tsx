import React from 'react'

import Card from '@mui/material/Card'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import st from './SkeletonLoader.module.scss'

const SkeletonLoader = () => {
  return (
    <>
      <Card className={st.SkeletonLoader}>
        <Stack  className={st.SkeletonLoader__card} spacing={1}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
      </Card>
      <Card className={st.SkeletonLoader}>
        <Stack  className={st.SkeletonLoader__card} spacing={1}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
      </Card>
    </>
  )
}

export default SkeletonLoader