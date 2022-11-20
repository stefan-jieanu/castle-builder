import * as React from 'react';
import { Grid, Typography, Container, Input, InputLabel  } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { updateConf } from '../store/castleConfSlice';

export default function Controls() {
  const dispatch = useDispatch();
  let castleConf = {...useSelector((state) => state.castleConf)};
  
  function _handleColorChange(e) {
    castleConf.color = e.target.value;
    dispatch(updateConf(castleConf));
  }

  function _handleHoverColorChange(e) {
    castleConf.hoverColor = e.target.value;
    dispatch(updateConf(castleConf));
  }

  function _handleSizeChangeX(e) {
    if (e.target.value > 0) {
      let newGeom = [...castleConf.geometry];
      newGeom[0] = parseFloat(e.target.value);
      console.log(newGeom);
      castleConf.geometry = newGeom;
      dispatch(updateConf(castleConf));
    }
  }

  function _handleSizeChangeY(e) {
    if (e.target.value > 0) {
      let newGeom = [...castleConf.geometry];
      newGeom[1] = parseFloat(e.target.value);
      console.log(newGeom);
      castleConf.geometry = newGeom;
      dispatch(updateConf(castleConf));
    }
  }

  function _handleSizeChangeZ(e) {
    if (e.target.value > 0) {
      let newGeom = [...castleConf.geometry];
      newGeom[2] = parseFloat(e.target.value);
      console.log(newGeom);
      castleConf.geometry = newGeom;
      dispatch(updateConf(castleConf));
    }
  }

  return (
    <Container>
      <Typography 
        variant='h4'
        sx={{mb: 3}}>
          Customization
      </Typography>

      <InputLabel
        htmlFor='color-input'>
        Color
      </InputLabel>
      <Input  
        id='color-input'
        defaultValue={castleConf.color} 
        color='primary'
        margin='dense'
        sx={{mb: 2}}
        onChange={_handleColorChange} />

      <InputLabel
        htmlFor='hover-color-input'>
        Hover color
      </InputLabel>
      <Input  
        id='hover-color-input'
        defaultValue={castleConf.hoverColor}
        color='primary'
        margin='dense'
        sx={{mb: 3}}
        onChange={_handleHoverColorChange} />
      
      <Typography 
        variant='h6'
        sx={{mb: 1}}>
          Size
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <InputLabel
            htmlFor='size-x'>
            X
          </InputLabel>
          <Input  
            id='size-x'
            defaultValue={castleConf.geometry[0]}
            color='primary'
            margin='dense'
            onChange={_handleSizeChangeX} />
        </Grid>
        <Grid item xs={4}>
          <InputLabel
            htmlFor='size-y'>
            Y
          </InputLabel>
          <Input  
            id='size-y'
            defaultValue={castleConf.geometry[1]}
            color='primary'
            margin='dense'
            onChange={_handleSizeChangeY} />
        </Grid>
        <Grid item xs={4}>
          <InputLabel
            htmlFor='size-z'>
            Z
          </InputLabel>
          <Input  
            id='size-z'
            defaultValue={castleConf.geometry[2]}
            color='primary'
            margin='dense'
            onChange={_handleSizeChangeZ} />
        </Grid>
      </Grid>


    </Container>
  );
}