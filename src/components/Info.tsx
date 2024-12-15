
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Info: React.FC = () => {
  return (
    <Container id='Info' sx={{marginY: '4rem' }}>
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
          src="/src/images/imagenInfo.jpg"
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
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            La solución de control de acceso basada en la nube líder del sector
          </Typography>

          {/* Acordeones */}
          <Box sx={{ marginTop: '1rem' }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Manténgase al día desde cualquier lugar y en tiempo real</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The Salto KS cloud technology delivers security with more simplicity, greater value, faster response time, and better user experience. Monitor every access point remotely from anywhere, at any time, and on any device – for even greater control and flexibility.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Analice datos valiosos y obtenga información sobre la actividad</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  La capacidad de analizar datos valiosos en tiempo real le permite optimizar la seguridad y tomar decisiones informadas para mejorar el acceso y la gestión de los recursos.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Gestione el acceso de forma fácil y segura</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  La tecnología en la nube garantiza que pueda gestionar el acceso de manera simple, segura y desde cualquier lugar con control total.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Agilice sus operaciones con integraciones</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Las integraciones con otros sistemas permiten una gestión más eficiente de los accesos, mejorando la experiencia del usuario y optimizando las operaciones diarias.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Info;
