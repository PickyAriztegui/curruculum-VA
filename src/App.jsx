import Header from './Components/Header'
import SeccionFormacion from './Components/SeccionFormacion';
import SeccionFormulario from './Components/SeccionFormulario';
import SeccionSobreMI from './Components/SeccionSobreMI';
import './index.css'
import 'animate.css';
import Footer from './Components/Footer';

function App() {
  return (
   
    <>
        <Header />
        <SeccionSobreMI />
        <SeccionFormacion />
        <SeccionFormulario />
        <Footer />
    </>

  );
}

export default App;
