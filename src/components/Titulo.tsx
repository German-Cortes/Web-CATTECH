
import { Box, Typography } from '@mui/material';



const Titulo = () => {

return (
    <Box id='Info'
        sx={{
        marginTop: 20 ,
        marginBottom: 20,
        width: { sm: '100%'},
        textAlign: { xs: 'center' },
        
        }}
    >
              <Typography 
        variant="h4" 
        component="h2" 
        sx={{ textAlign: 'center', mb: 4 }}
      >
        Caracteristicas
      </Typography>

    </Box>
);
}

export default Titulo;