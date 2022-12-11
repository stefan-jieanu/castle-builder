import React from 'react'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'

export default function SketchOptions() {
  return (
    <Grid 
      container
      spacing={0}
      pb={5} pt={1} px={1}
      sx={{
        backgroundColor: 'primary.dark',
        boxShadow: '5px 6px 5px #000'
      }}>
      <Typography>Options Menu</Typography>
    </Grid>
  )
}
