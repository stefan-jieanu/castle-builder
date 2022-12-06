import * as React from 'react';
import { Container, Grid, Typography} from '@mui/material';
import { ThemeProvider, CssBaseline } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Controls from './components/Controls';
import { appTheme } from "./themes/theme";
import './App.css';

import GameComponent from './components/GameComponent';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [data,  setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("http://localhost:8200/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // });

  return (
    <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme/>
    <Grid
      container
      spacing={0}
      direction='column'
      justify='center'
      style={{minHeight: '100vh'}}>
        <Container>
        <BrowserRouter>
        <Grid item width='100%'>
          <Nav />
        </Grid>

          <Routes>
          <Route path='/' element={
            <Grid item textAlign='center' marginTop='150px'>
              <Controls/>
              <GameComponent />
            </Grid>
          } />
          <Route path='/login' element={
            <Login />
          } />
          <Route path='/register' element={
            <Register />
          } />

          </Routes>  
        </BrowserRouter>
    </Container>    
    </Grid>
    </ThemeProvider>
  );
}

export default App;
