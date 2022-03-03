import React from 'react';
import ImgDesktop from '../assets/figma-desktop.png'
import ImgMobile from '../assets/figma-mobile.png'
import LogoColor from '../assets/logo-home-color.png'

const Portfolio = () => {
  return (
       <>
            <div className='row'>
               <div className='div-logo-home-color'>
                   <img src={LogoColor} alt="logo-home-color" />
               </div>
               <div className="col-md-12 col-sm-12 contenedor-portfolio-desktop">
                    <div className="img-desktop">
                         <h3>Desktop</h3>
                         <img src={ImgDesktop} alt="imagen-figma-desktop" />
                    </div>
                    <div className="img-mobile">
                         <h3>Mobile</h3>
                         <img src={ImgMobile} alt="imagen-figma-mobile" />
                    </div>
                  
               </div>
            </div>
       </>
  ) 
};

export default Portfolio;
