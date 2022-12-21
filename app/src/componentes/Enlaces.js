import React from 'react'
import './Enlaces.css'
import Card from '@mui/material/Card';
import { Button, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import './Tarjetas.css';

function Enlaces() {

  const Tarjeta = (props) => {
    return <Button>
            <Card sx={{ minWidth: 500 }} className='Card'>
              <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.children}
                  </Typography>
              </CardContent>
            </Card>     
          </Button>
  }


  return (
  <>
    <div className='Enlaces'>
        <h1 className='h1-div'>Ps. Valentina Moyano</h1>

        <Tarjeta onClick={ console.log() }>Instagram</Tarjeta>
        <Tarjeta onClick={ console.log() }>TikTok</Tarjeta>
        <Tarjeta onClick={ console.log() }>Whatsapp</Tarjeta>

    </div>

    
  </>  

  )
}

export default Enlaces
