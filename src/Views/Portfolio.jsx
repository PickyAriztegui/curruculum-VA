import React from 'react';
import CardHomeColor from '../assets/card-home-color.png'
import CardVere from '../assets/card-vere.png'
import { Link } from 'react-router-dom'


const Portfolio = () => {
  return (
       <>
            <div className='row'>
               <div className="col-md-12 col-sm-12 contenedor-portfolio-desktop-original">
                    <div className="box-porfolio-left">
                    <Link to="/homecolor"> <img className='tarjetas-portfolios' src={CardHomeColor} alt="card-home-color" /></Link> 
                    </div>
                    
                    <div className="box-porfolio-right">
                    <Link to="/vere"> <img className='tarjetas-portfolios' src={CardVere} alt="card-vere" /></Link> 
                    </div>
                  
               </div>
            </div>
       </>
  ) 
};

export default Portfolio;
