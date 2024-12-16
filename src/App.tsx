
import Box from '@mui/material/Box';
import DrawerAppBar from './components/DrawerAppBar';
import Hero from './components/Hero';
import Info from './components/Info';
import Imagen from './components/Imagen';
import Funciones from './components/Funciones';
import { Divider } from '@mui/material';
import Footer from './components/Foter';
import Titulo from './components/Titulo';



export default function App() {
  return (

      <Box >
        <DrawerAppBar/>
        <Imagen/>
        <Box  sx={{marginTop: 16, marginBottom: 16}}>
          <Titulo/>
          <Info/>
        </Box >
        <Box sx={{marginTop: 16, marginBottom: 16}}>
        <Hero/>
        </Box >
        
        <Footer/>
      </Box>

  );
}
