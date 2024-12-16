
import React from "react";
import { Box, Container } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <>
      {/* Imagen para pantallas grandes (1920x1080) */}
      <Container id="Descarga">

      <Box 
        sx={{
          display: { xs: "none", sm: "block" }, // Ocultar en pantallas pequeñas
          width: "100%",
          height: "100vh",
          backgroundImage: "url('src/images/Apk.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

    </Container>
      {/* Imagen para pantallas móviles (1080x1920) */}
        <Container id="Descarga">
        <a href="https://drive.google.com/drive/folders/1YcNzR5vmpbEUzheEkkOiT6BLo8_9mDj1?usp=drive_link" style={{ textDecoration: "none" }}>
      <Box 
        sx={{
          display: { xs: "block", sm: "none" }, // Ocultar en pantallas grandes
          width: "100%",
          height: "100vh",
          backgroundImage: "url('src/images/Hero_movil.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      </a>
    </Container>
    </>
  );
};

export default Hero;
