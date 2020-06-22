import React from "react";
import "./Home.scss";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a href="#nosotros">Contacto</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Nosotros</a>
          {/* <a href="#crea">Crea Tu Propio Stand</a> */}
          <a href="#home">Home</a>
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
