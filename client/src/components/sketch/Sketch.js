import React from 'react'
import { Grid } from '@mui/material';
import SketchCanvas from './SketchCanvas';
import SketchTools from './SketchTools';
import SketchOptions from './SketchOptions';

export default function Sketch() {
  return (
    <Grid container mt={5}>
      <Grid item xs={2} px={2}>
        <SketchTools />
      </Grid>
      <Grid item xs={8}>
        <SketchCanvas />
      </Grid>
      <Grid item xs={2} px={2}>
        <SketchOptions />
      </Grid>
    </Grid>
  )
}
