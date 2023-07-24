import React, {useState} from 'react'
import './Formulario.css'
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

export default function Formulario() {
    // Funciones
    function validarEmail(correoElectronico) {
        // eslint-disable-next-line
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correoElectronico)){
         return true
        } else {
         return false
    
        }
    }
    // Variables
    const notificacion = () => toast.success(correoElectronico+" haz sido agregado exitosamente.")
    const notificacionRechazada = () => toast.error("Error, porfavor revisar el correo.")
    const [nombreContacto, setNombreContacto] = useState('');
    const[correoElectronico, setCorreoElectronico] = useState('');

    const funcionGuardar = async() => {

        if(validarEmail(correoElectronico) === true){
        notificacion();
        console.log(nombreContacto, correoElectronico)
        }else{
        notificacionRechazada();
        }
    }

  return (
    <div className='subscribete'>
        <h2 className='texto'>
            Para notificación de horas disponibles por correo inscribeté aquí:
        </h2>

        <Box className='box'>
{/* form nombre */}
            <TextField size="small"
                value={nombreContacto}
                placeholder="Nombre y Apellido"
                onChange={(event) => {
                setNombreContacto(event.target.value)
                }}
            />  
{/* form correo  */}
            <div className='divisor'></div>
            <TextField size="small"
                value={correoElectronico}
                placeholder="Email"
                onChange={(event) => {
                setCorreoElectronico(event.target.value)
                validarEmail(correoElectronico)
                }}
            />  
        </Box>

        {/* boton enviar */}
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

            {/* notificacion de la verificacion del correo  */}
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
  )
}
