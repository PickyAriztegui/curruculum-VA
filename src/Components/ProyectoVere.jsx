import React from 'react';
import ImagenDesktop from '../assets/DESKTOPhoneVERE.png'
import ImagenMobile from '../assets/MOBILEhomeVERE.png'
import LogoVere from '../assets/logo-vere.png'
import ImagenPlp from '../assets/DESKTOPplpVERE.png'
import ImagenPdp from '../assets/DESKTOPpdpVERE.png'
import ImagenRegistro from '../assets/DESKTOPregistro.png'
import ImagenBuscador from '../assets/DESKTOPbuscador.png'
import ImagenMenu from '../assets/DESKTOPmenu.png'
import ImagenMenuMobileOne from '../assets/MOBILEmenu1VERE.png'
import ImagenMenuMobileTwo from '../assets/MOBILEmenu2VERE.png'


const Portfolio = () => {
  return (
       <>
            <div className='row'>
               <div className='div-logo-home-color'>
                   <img className='logo-vere' src={LogoVere} alt="logo-home-color" />
               </div>
               <div className="col-md-12 col-sm-12 contenedor-portfolio-desktop">
                    <div className="img-desktop">
                         <h3>Desktop</h3>
                         <img src={ImagenDesktop} alt="imagen-figma-desktop" />
                         <img src={ImagenPlp} alt="imagen-plp" />
                         <img src={ImagenPdp} alt="imagen-pdp" />
                         <img src={ImagenRegistro} alt="imagen-registro" />
                         <img src={ImagenBuscador} alt="imagen-buscador" />
                         <img src={ImagenMenu} alt="imagen-menu" />
                    </div>
                    <div className="img-mobile">
                         <h3>Mobile</h3>
                         <img src={ImagenMobile} alt="imagen-figma-mobile" />
                         <img src={ImagenMenuMobileOne} alt="imagen-menu-mobile" />
                         <img src={ImagenMenuMobileTwo} alt="imagen-menu-mobile" />

                    </div>
                  
               </div>
            </div>
       </>
  ) 
};

export default Portfolio;
