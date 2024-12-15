import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';

const Imagen: React.FC = () => {
  return (
    <Box id='Imagen'
      sx={{ 
        width: '100%', 
        height: '100vh', 
        backgroundImage: `url('/src/images/commercial_background.jpg')`, // Reemplaza con tu imagen real
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={2}>
          
          {/* Contenedor de texto a la izquierda */}
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: '2rem', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '10px' }}>
              <Typography variant="h6" color="white" sx={{ fontWeight: 'bold' }}>
                Soluciones de control de accesos para Empresas, Industria e Infraestructuras
              </Typography>
              <Typography variant="h3" color="white" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>
              PLERIFY
              </Typography>
              <Typography variant="body1" color="white" sx={{ marginTop: '1rem' }}>
              Software de verificación de patentes vehiculares, obteniendo datos relevantes del vehículo y su situación legal. Su integración se puede realizar mediante nuestras Cámaras LPR Survision, logrando el registro y acreditación de vehículos que transitan por los accesos, además de la apertura automática de barreras para vehículos autorizados.
              </Typography>
            </Box>
          </Grid>

          {/* Espacio vacío a la derecha */}
          <Grid item xs={12} md={6}>
            {/* La parte derecha está vacía como se observa en la imagen */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Imagen;
