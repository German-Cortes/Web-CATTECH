import React from 'react';
import { Grid, Box, Container, useMediaQuery, useTheme } from '@mui/material';

const Imagen: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta tamaños menores al breakpoint 'sm' (600px)

  return (
    <Box
      id="Imagen"
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${isMobile ? '/src/images/Hero_movil.jpg' : '/src/images/Hero.jpg'})`, // Cambia la imagen según el tamaño
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Sombra sutil
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={2}>
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
