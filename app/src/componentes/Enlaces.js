import React, { useState } from 'react'
import './Enlaces.css'
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Enlaces() {

  const Tarjeta = (props) => {
    return <Button className='Card'>
            <Card sx={{ minWidth: 270 }} 
               style={{
                borderRadius: 15,
                height: "60px",
                backgroundColor: "pink",
                border: "3px solid rgb(241, 185, 43)",
              }}
              variant="contained" 
            >
              <h2> {props.children} </h2>
            </Card>     
          </Button>
  }

  const notificacion = () => toast.success(correoElectronico+" haz sido agregado exitosamente.")

  const[correoElectronico, setCorreoElectronico] = useState('');

  const funcionGuardar = async() => {

    notificacion();
  }

  return (
  <>
    <div className='Enlaces'>
        <h1 className='h1-div'>Ps. Valentina Moyano</h1>
        <div className='fondo-blanco'>

          <Link href="https://instagram.com/ps.valentinamoyano" underline="none">
            <Tarjeta>Instagram</Tarjeta>
          </Link>
          
          <Link href="https://tiktok.com/@ps.valentinamoyano" underline="none">
            <Tarjeta>TikTok</Tarjeta>
          </Link>

          <Link href="" underline="none">
            <Tarjeta>Whatsapp</Tarjeta>
          </Link>

          <div className='subscribete'>
            <h2>
              Para una notificación de horas disponibles, subscribete aquí:
            </h2>

            <TextField size="small"
              value={correoElectronico}
              placeholder="Tu correo aquí :)"
              onChange={(event) => {
                setCorreoElectronico(event.target.value)
              }}
            />  

            <div className='botonsub'>
              <Button
                  style={{
                        borderRadius: 3,
                        backgroundColor: "rgb(241, 185, 43)",
                        fontSize: "13px",
                        color: "black"
                  }}
              variant="contained"
              onClick={funcionGuardar}
              >Suscribirse</Button>

              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />

            </div>     
          </div>
        </div>
    </div>
  </>  
  )
}

export default Enlaces
