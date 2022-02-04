import React from 'react';
import LogoFlecha from '../assets/logo-flecha.png'
import FotoPerfil from '../assets/imagen-picky.png'


const SeccionSobreMI = () => {
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

            <div className="col-md-6 col-sm-6 contenedor-seccion-sobre-mi-right">
                <div className='seccion-sobre-mi-right'>
                    <img src={FotoPerfil} alt="imagen-perfil" />
                </div>
            </div>

            <div className="col-md-6 col-sm-6 contenedor-seccion-sobre-mi-left">
                <div className='seccion-sobre-mi-left'>
                    <h2>SOBRE MÍ <img className='logo-flecha' src={LogoFlecha} alt="logo-flecha" /></h2>
                    <p>Soy diseñadora UI con buen conocimiento de Diseño en 
                        Comunicación Visual, me dedico a crear visualmente la interfaz 
                        de diferentes productos digitales.</p>
                    <p> Tengo facilidad y muy buena predisposición para aprender el uso 
                        de nuevas herramientas y metodologías que se requieran para
                        alcanzar mis objetivos así como optimizar los procesos que me
                        lleven a cumplir con las metas propuestas.</p>  
                    <p> Valoro el trabajo en equipo y la cooperación colectiva para la 
                        búsqueda y obtención de los mejores resultados en cada proyecto, 
                        y por eso tengo la convicción que trabajar en ambientes con buen 
                        clima laboral hacen armonioso y agradable practicar esta profesión
                        que tanto aprecio y es parte de mi vida.</p>
                    <a className='btn-contactarme' href="#">Contactarme</a>
                </div>
            </div>
        </div>
      </>
  )
};

export default SeccionSobreMI;
