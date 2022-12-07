import React from 'react'
import { Grid } from '@mui/material'
import Tool from './Tool'

export default function SketchTools() {
  return (
    <Grid 
      container
      spacing={0}
      maxWidth={200}
      sx={{
        backgroundColor: 'primary.dark',
        boxShadow: '5px 6px 5px #000'
      }}>
      <Grid item xs={6}>
        <Tool name='Pen'/>
      </Grid>
      <Grid item xs={6}>
        <Tool name='Box'/>
      </Grid>
      <Grid item xs={6}>
        <Tool name='Ell'/>
      </Grid>
      <Grid item xs={6}>
        <Tool name='Err'/>
      </Grid>
    </Grid>
  )
}
