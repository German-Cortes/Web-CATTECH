
import Box from '@mui/material/Box';
import DrawerAppBar from './components/DrawerAppBar';
import Hero from './components/Hero';
import Info from './components/Info';
import Imagen from './components/Imagen';
import Funciones from './components/Funciones';
import { Divider } from '@mui/material';



export default function App() {
  return (

      <Box >
        <DrawerAppBar/>
        <Hero/>
        <Box sx={{marginTop: 16, marginBottom: 16}}>
          <Info/>
        </Box >
        <Imagen/>
        <Box sx={{marginTop: 16, marginBottom: 16}}>
          <Funciones/>
        </Box> 
        <Divider sx={{marginTop: 16, marginBottom: 16}}/>
      </Box>

  );
}
