import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'white', 
        py: 3, 
        px: 2, 
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2">
        Dirección: Calle Falsa 123, Ciudad, País
      </Typography>
      <Typography variant="body2">
        Contacto: contacto@empresa.com | Tel: +123 456 7890
      </Typography>
    </Box>
  );
};

export default Footer;
