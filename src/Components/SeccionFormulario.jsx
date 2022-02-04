import React from 'react';

const SeccionFormulario = () => {
  return (
      <>
        <div className="row">
            <div className="col-md-12 div-sm-12 contenedor-formulario">
              <h3>¡Si te querés contactar conmigo dejame tu mensaje!</h3>
                <div className='box-white'>
                    <div className='box-pink'>
                        <form>
                            <input className='form-control input-nombre' placeholder='Nombre' type="text" />
                            <input className='form-control input-email' placeholder='Email'Email type="email" />
                            <textarea className='form-control text-area-mensaje' placeholder='Mensaje'></textarea>
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
