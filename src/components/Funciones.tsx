
import React, { useState } from 'react';
import { Box, Button, Typography, Grid, Card, CardContent, Container } from '@mui/material';

// Interfaz para cada sección
interface SectionContent {
  title: string;
  description: string;
  imageUrl: string;
}

const sections: SectionContent[] = [
  {
    title: "Seguridad y Protección",
    description: `
      Aumente la seguridad del personal, usuarios y visitantes, mediante una supervisión de la actividad las 24 horas del día.

      - Tranquilidad y fiabilidad. Las llaves físicas se pierden o copian con facilidad y su sustitución no es económica. Los accesos inteligentes son más seguros y sencillos de gestionar.
      - Control y seguridad integral. Proteja el perímetro de sus propiedades y cualquier punto de acceso al edificio. Especifique hasta el nivel individual quién puede acceder a qué, y cuándo, en tiempo real.
      - Detección de intrusiones. Reciba informes sobre las actividades de acceso. Reciba alertas sobre accesos fuera del horario comercial y sobre intrusos en las instalaciones.
      - Responsabilidad. Ajuste los permisos de acceso y los horarios en el momento, revoque inmediatamente los permisos a trabajadores despedidos o inquilinos.`,
    imageUrl: '/src/static/images/commercial_pillar_security.jpg', // Cambia por la ruta de la imagen
  },
  {
    title: "Eficiencia en la Gestión",
    description: `Contenido sobre eficiencia en la gestión...`,
    imageUrl: '/src/static/images/commercial_pillar_user.jpg', // Cambia por la ruta de la imagen
  },
  {
    title: "Experiencia de Usuario",
    description: `Contenido sobre experiencia de usuario...`,
    imageUrl: '/src/static/images/commercial_pillar_operations.jpg', // Cambia por la ruta de la imagen
  },
  {
    title: "Flexibilidad y Escalabilidad",
    description: `Contenido sobre flexibilidad y escalabilidad...`,
    imageUrl: '/src/static/images/commercial_pillar_flexibility.jpg', // Cambia por la ruta de la imagen
  },
];

const SecurityComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionContent>(sections[0]);

  return (
    <Container id='Funciones' > 
      <Box sx={{ padding: 3 }}>
        {/* Botones */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 2 }}>
          {sections.map((section, index) => (
            <Button
              key={index}
              variant={activeSection.title === section.title ? 'contained' : 'outlined'}
              onClick={() => setActiveSection(section)}
              sx={{
                color: '#4CAF50', // Verde claro del botón outlined
                borderColor: '#4CAF50', // Borde verde claro
                backgroundColor: activeSection.title === section.title ? '#4CAF50' : 'transparent', // Fondo verde claro para el botón activo
                '&:hover': {
                  backgroundColor: activeSection.title === section.title ? '#45a049' : 'transparent',
                  borderColor: '#45a049', // Verde más oscuro al hacer hover
                },
              }}
            >
              {section.title}
            </Button>
          ))}
        </Box>

        {/* Contenido */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src={activeSection.imageUrl}
              alt={activeSection.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ border: 'none', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {activeSection.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    whiteSpace: 'pre-line',
                    color: '#4f4f4f', // Color de texto similar al de la imagen
                    fontSize: '16px', // Ajuste de tamaño del texto
                    lineHeight: 1.6, // Espaciado entre líneas
                  }}
                >
                  {activeSection.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SecurityComponent;
