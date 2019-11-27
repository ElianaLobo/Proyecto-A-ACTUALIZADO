import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import './patas2.png'

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <div className="link-container">
          <Link to="/Home" className="link">Home</Link>
        </div>
        <div className="link-container">
          <Link to="/Page1" className="link">Adopciones</Link>
        </div>
        <div className="link-container">
          <Link to="/Page2" className="link">Productos</Link>
        </div>
        <div className="link-container">
          <Link to="/Page3" className="link">Servicios</Link>
        </div>
      </div>
    );
  }

}

export default NavBar;