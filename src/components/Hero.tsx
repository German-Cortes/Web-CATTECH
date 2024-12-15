

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <Box id='Hero'
      sx={{
        position: 'relative',
        width: '90%', // Margen lateral en pantallas grandes
        height: {
          xs: '120vw', // Altura para pantallas pequeñas (móviles), más alta para que el formato sea vertical
          sm: '56.25vw', // Altura en pantallas medianas y grandes (mantiene 16:9)
        },
        maxHeight: '90vh', // Máxima altura en pantallas grandes
        margin: '2rem auto', // Margen superior e inferior
        borderRadius: '20px', // Esquinas redondeadas
        overflow: 'hidden', // Asegura que la imagen no se salga del borde redondeado
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Sombra sutil
      }}
    >
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/src/images/homelok-operator.jpg"
        alt="Vivienda conectada e inteligente"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Asegura que la imagen cubra el contenedor
          zIndex: 1,
        }}
      />

    </Box>
  );
};

export default HeroSection;

