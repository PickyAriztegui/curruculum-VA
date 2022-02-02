import React from 'react';
import LogoVa from '../assets/logo-VA.png'
import LogoSobreMi from '../assets/logo-sobre-mi.png'
import LogoPortfolio from '../assets/logo-portfolio.png'
import LogoFormacion from '../assets/logo-formacion.png'
import LogoCursos from '../assets/logo-cursos.png'
import LogoContacto from '../assets/logo-contacto.png'

const Header = () => {
  return( 
     <>
            <div className="row">
               <div className="col-md-2 col-sm-2 contenedor-header-left">
                    <div className='contenedor-logo'>
                       <a href="#"> <img src={LogoVa} alt="logo-va" /></a>
                    </div>
               </div>

               <div className="col-md-10 col-sm-10 contenedor-header-right">
                   <div className='contenedor-menu'>
                        <div className='menu-nav'>
                            <a className='ancla-menu' href="#"><img className='icono-nav' src={LogoSobreMi} alt="logo-sobre-mi" />SOBRE MÍ</a>
                        </div>
                        <div className='menu-nav'>
                            <a className='ancla-menu' href="#"><img className='icono-nav' src={LogoPortfolio} alt="logo-portfolio" />PORTFOLIO</a>
                        </div>
                        <div className='menu-nav'>
                            <a className='ancla-menu' href="#"><img className='icono-nav' src={LogoFormacion} alt="logo-formacion" />FORMACION</a>
                        </div>
                        <div className='menu-nav'>
                            <a className='ancla-menu' href="#"><img className='icono-nav' src={LogoCursos} alt="logo-cursos" />ESTUDIOS/CURSOS</a>
                        </div>
                        <div className='menu-nav'>
                            <a className='ancla-menu' href="#"><img className='icono-nav' src={LogoContacto} alt="logo-contacto" />CONTACTO</a>
                        </div>
                   </div>
               </div>

            </div>
     </>
  )
};

export default Header;
