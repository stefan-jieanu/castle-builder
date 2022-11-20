import * as React from 'react';
import { Container, Grid, Typography} from '@mui/material';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appTheme } from "./themes/theme";
import './App.css';

import Game from './components/Game.js';
import Nav from './components/Nav.js';

function App() {
  const [data,  setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("http://localhost:8200/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // });

  return (
    <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme />
    <Grid>
      <Nav />
      <Grid
        container
        spacing={0}
        alignItems='center'
        justify='center'
        height='calc(100vh - 150px)'>
        {/* If user is logged in */}
        <Game />

        {/* else */}
        {/* <Grid item md={12} textAlign='center'>
          <Typography
            variant="h5">
            Log in to view your castle
          </Typography>
        </Grid> */}
        
      </Grid>
        {/* <p>{!data ? "Loading..." : data}</p> */}
    </Grid>
    </ThemeProvider>
  );
}

export default App;
