import * as React from 'react';
import { Grid, Typography} from '@mui/material';
import { Canvas } from '@react-three/fiber';
import Box from './Box';

export default function Game() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography variant='h2'>This is controls</Typography>
      </Grid>
      <Grid item xs={8}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </Grid>
    </Grid>
  );
}