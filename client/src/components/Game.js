import * as React from 'react';
import { Grid, Typography} from '@mui/material';
import { Canvas } from '@react-three/fiber';
import Castle from './Castle';
import Controls from './Controls';

export default function Game() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Controls />
      </Grid>
      <Grid item xs={8}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Castle position={[-1.2, 0, 0]} />
        </Canvas>
      </Grid>
    </Grid>
  );
}