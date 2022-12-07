import React from 'react'
import { Box } from '@mui/system'

export default function Tool({name}) {
  const [selected, setSelected] = React.useState(false);

  return (
    <Box
      onClick={() => {setSelected(!selected)}}
      sx={{
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #000',
        // borderTopLeftRadius: '25px',
        // backgroundColor: '#4e5959',
        boxShadow: selected ? 'inset 0 0 10px #000' : '',
        '&:hover': {
          // backgroundColor: 'primary.darker',
          boxShadow: 'inset 0 0 5px #000',
          cursor: 'pointer'
        }
      }}>
        {name}
    </Box>
  )
}
