import React from 'react';
import SeccionSobreMI from '../Components/SeccionSobreMI';
import SeccionFormacion from '../Components/SeccionFormacion';
import SeccionFormulario from '../Components/SeccionFormulario';
import 'animate.css';
import SeccionCursos from '../Components/SeccionCursos';

const Home = () => {
  return (
      <>
      
        <div className="row">
            <div className="col-md-12 col-sm-12 contenedor-hola-soy-VA">
                <div className='seccion-hola-soy-VA'>
                    <h1>HOLA!</h1>
                    <h2>Soy Diseñadora UI /Gráfica</h2>
                    <h3>VICTORIA ARIZTEGUI</h3>
                </div>
            </div>
        </div>

        <SeccionSobreMI />
        <SeccionFormacion />
        <SeccionCursos />
        <SeccionFormulario />
        
      </>
  )
};

export default Home;
