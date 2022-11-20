import * as React from 'react';
import { Container, Grid, Typography} from '@mui/material';
import './App.css';

import Game from './components/Game.js';
import Nav from './components/Nav.js';

function App() {
  const [data,  setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:8200/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });

  return (
    <Container>
      <Nav />
        <Game />
        <p>{!data ? "Loading..." : data}</p>
    </Container>
  );
}

export default App;
