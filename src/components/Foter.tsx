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
        © {new Date().getFullYear()} CATTECH. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2">
        Dirección: Calle Falsa 123, Viña del Mar, País
      </Typography>
      <Typography variant="body2">
        Contacto: n.muñoz@cattech.com | Tel: +56989215674
      </Typography>
    </Box>
  );
};

export default Footer;
