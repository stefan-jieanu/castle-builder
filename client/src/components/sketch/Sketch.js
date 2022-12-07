import React from 'react'
import { Grid } from '@mui/material';
import SketchCanvas from './SketchCanvas';
import SketchTools from './SketchTools';
import SketchOptions from './SketchOptions';

export default function Sketch() {
  return (
    <Grid container spacing={2} mx={2} mt={5}>
      <Grid item xs={2}>
        <SketchTools />
      </Grid>
      <Grid item xs={8}>
        <SketchCanvas />
      </Grid>
      <Grid item xs={2}>
        <SketchOptions />
      </Grid>
    </Grid>
  )
}
