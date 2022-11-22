import * as React from 'react';
import { Container, Grid, Typography} from '@mui/material';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Controls from './components/Controls';
import { appTheme } from "./themes/theme";
import './App.css';

import GameComponent from './components/GameComponent';
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
    <Grid
      container
      spacing={0}
      direction='column'
      justify='center'
      style={{minHeight: '100vh'}}>
      {/* <BrowserRouter>
        <Routes> */}
          {/* <Route path='/'> */}
            <Container>
            <Grid item width='100%'>
              <Nav />
            </Grid>
            <Grid item textAlign='center' marginTop='150px'>
              <Controls/>
              <GameComponent />
            </Grid>
            </Container>
            {/* </Route> */}
        {/* </Routes>
      </BrowserRouter> */}


      {/* else */}
      {/* <Grid item md={12} textAlign='center'>
        <Typography
          variant="h5">
          Log in to view your castle
        </Typography>
      </Grid> */}
        
    </Grid>
    </ThemeProvider>
  );
}

export default App;
