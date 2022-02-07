import React from 'react';
import ImgDesktop from '../assets/figma-desktop.png'
import ImgMobile from '../assets/figma-mobile.png'


const Portfolio = () => {
  return (
       <>
            <div className='row'>
               <div className="col-md-12 col-sm-12 contenedor-portfolio-desktop">
                    <div className="img-desktop">
                         <h3>Desktop</h3>
                         <img src={ImgDesktop} alt="imagen-figma-desktop" />
                    </div>
                    <div className="img-desktop">
                         <h3>Mobile</h3>
                         <img src={ImgMobile} alt="imagen-figma-mobile" />
                    </div>
                  
               </div>

             {/*   <div className="col-md-6 col-sm-6 contenedor-portfolio-mobile">
                  <div className="img-mobile">
                  <img src={ImgMobile} alt="imagen-figma-mobile" />
                  </div>
               </div> */}
            </div>
       </>
  ) 
};

export default Portfolio;
