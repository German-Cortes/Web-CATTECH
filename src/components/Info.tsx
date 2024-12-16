
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Info: React.FC = () => {
  return (
    <Container sx={{marginY: '4rem' }}>
      {/* Contenedor principal flex */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'center',
        }}
      >
        {/* Imagen */}
        <Box  
          component="img"
          src="/src/images/agendando2.png"
          alt="Control de acceso"
          sx={{
            width: { xs: '100%', md: '50%' },
            height: 'auto',
            borderRadius: '8px',
            marginBottom: { xs: '1rem', md: '0' },
          }}
        />

        {/* Texto y acordeones */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            marginLeft: { md: '2rem' },
            textAlign: { xs: 'center', md: 'left' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxHeight: { md: 'auto' }, // Para que en pantallas grandes no supere la altura de la imagen
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Características principales de la aplicación
          </Typography>

          {/* Acordeones */}
          <Box sx={{ marginTop: '1rem' }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Agendar visitas fácilmente</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Organiza tus citas de diagnóstico o reparación con rapidez. Programa fechas y horarios específicos para atender a tus clientes, evitando conflictos en tu agenda.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Historial de servicios detallado</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Accede a un registro completo de los servicios realizados. Consulta la información por cliente o dispositivo, incluyendo fechas, motivos y detalles del servicio.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Estado actualizado de servicios</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Mantente al tanto del progreso de cada servicio con estados claros: trabajando, listo o con problemas. Informa a tus clientes sobre los avances de forma precisa y en tiempo real.                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Gestión desde cualquier lugar</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                La aplicación está optimizada para dispositivos móviles, permitiéndote administrar tus servicios y clientes desde cualquier lugar con total comodidad.                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Info;
