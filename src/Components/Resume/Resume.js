import React from "react";
import "./Resume.scss";
import { Row, Col } from "react-bootstrap";
import { resumeNombreEmpresa } from "../Form/Form";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <h2>RESUMEN DE TU STAND</h2>
        <h3>nomre empresa {this.props.resumeNombreEmpresa} </h3>
      </div>
    );
  }
}

export default Resume;
