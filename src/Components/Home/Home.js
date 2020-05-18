import React from "react";
import "./Home.scss";

class home extends React.Component {
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
        <div>
          <img
            className="imagenHome"
            src="https://scontent.feoh1-1.fna.fbcdn.net/v/t31.0-8/16463319_1575613852467248_5144333456642728183_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_eui2=AeGpmjkVrPYyjDPIJUtD2LxGC6B0aVz7fY4LoHRpXPt9jkJcPFCkOJ-bMhmIsfM441g&_nc_ohc=Qrw6bqZ6Mv0AX-FT2lK&_nc_ht=scontent.feoh1-1.fna&oh=c2bdfadf94a61a8779492c7f8a0795f5&oe=5EE5BDE2"
            alt="imagen home"
          />
        </div>
        <div className="BuiltYourOwnStand">
          <h2>CREA TU PROPIO STAND</h2>
          <h4>
            En 12 horas o menos recibirás el render de tu stand junto con la
            cotización según tu personalización
          </h4>
        </div>
        <div className="yellowBar"></div>
      </div>
    );
  }
}

export default home;
