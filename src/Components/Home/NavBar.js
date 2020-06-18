import React from "react";
import "./Home.scss";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a href="#contacto">Contacto</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="../Crea/Crea.js">Crea Tu Propio Stand</a>
          <a className="active" href="#home">
            Home
          </a>
          <img
            className="logoBanner"
            src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-5/tsunami-coffee/images/beans.png"
            alt="logo face"
            height="42"
            width="42"
          />
        </div>
        <div>
          <h1 className="mensaje">
            <span className="negrillaMensaje">LÍDERES EN CALIDAD Y DISEÑO</span>{" "}
            <br></br> <span>DE STANDS PARA FERIAS EN MEDELLÍN</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default NavBar;
