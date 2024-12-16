import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const Beneficio = () => {
  return (
    <Container  maxWidth="md" sx={{ my: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          Beneficios
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            • Organiza mejor tus citas y optimiza tu tiempo.
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            • Accede rápidamente al historial de reparaciones.
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            • Mantén informados a tus clientes sobre el estado de sus dispositivos.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Beneficio;
