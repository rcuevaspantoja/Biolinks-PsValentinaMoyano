import React from 'react'
import Card from '@mui/material/Card';
import { Button, CardActions, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import './Tarjetas.css';

function Tarjetas() {

  


  return (
    <div className='Tarjetas'>
        <Button>
            <Card sx={{ minWidth: 500 }}>
            <CardContent>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography>

            </CardContent>
            </Card>     
        </Button>
           
    </div>
  )
}

export default Tarjetas