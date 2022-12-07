import * as React from 'react';
import { Container, Grid, Typography} from '@mui/material';
import { ThemeProvider, CssBaseline } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from './components/Controls';
import Sketch from './components/sketch/Sketch';
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
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<h1 style={{textAlign: 'center'}}>Nothing here yet</h1>} />
            <Route path='/sketch' element={ <Sketch /> } />
            <Route path='/login' element={ <Login /> }/>
            <Route path='/register' element={ <Register /> }/>
          </Routes>  
        </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
