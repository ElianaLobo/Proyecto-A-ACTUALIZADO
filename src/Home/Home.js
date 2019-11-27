import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <h1>Patitas CABA  </h1>


        <div className="PadreAlpha">

                <div className="PadreBeta">
                          <div className="HijoA">
                          <p>Bienvenida</p>
                          </div>

                          <div className="HijoB">
                          <p>Anuncios</p>
                           </div>
                </div>


                <div className="HijoC">
                <p>Formulario</p>
                </div>    

                
          </div>

          


      </div>
    );
  }
}

export default Home;