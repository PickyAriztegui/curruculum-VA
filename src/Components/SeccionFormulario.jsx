import React from 'react';

const SeccionFormulario = () => {
  return (
      <>
        <div className="row">
            <div className="col-md-12 div-sm-12 contenedor-formulario">
                <div className='box-white'>
                    <div className='box-pink'>
                        <h3>¡Dejame tu mensaje!</h3>
                        <form>
                            <input className='form-control input-nombre' placeholder='Nombre' type="text" />
                            <input className='form-control input-email' placeholder='Email'Email type="email" />
                            <textarea className='form-control text-area-mensaje' placeholder='Mensaje' name="" id="" cols="30" rows="10"></textarea>
                            <a className='btn-formulario' type='submit' href="#">Enviar mensaje</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
};

export default SeccionFormulario;
