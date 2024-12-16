
import { Box, Typography } from '@mui/material';



const TituloBenef = () => {

return (
    <Box id='Beneficios'
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
        Beneficios
      </Typography>

    </Box>
);
}

export default TituloBenef;