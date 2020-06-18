import React from "react";
import "./Home.scss";
import { Row, Col } from "react-bootstrap";

class Proyectos extends React.Component {
  render() {
    return (
      <div>
        <div className="displayProyectos">
          <h2>PROYECTOS</h2>
          <h4>¡Estos son algunos de nuestros proyectos!</h4>
          <div className="yellowBar"></div>
          <div className="imageProyectos">
            <img className="stand1" src="/FotosProyectos/stand1.jpg" />
            <img className="stand2" src="/FotosProyectos/stand2.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Proyectos;
