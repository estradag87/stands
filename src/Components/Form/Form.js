import React from "react";
import "./Form.scss";
import { Row, Col, Button } from "react-bootstrap";

class Form extends React.Component {
  render() {
    const { errors } = this.props;
    return (
      <div className="section2">
        <div>
          <h3 className="startInfo">COMIENZA DANDONOS TUS DATOS</h3>
          <form onSubmit={this.props.handleSubmit} noValidate>
            <Row className="justify-content-lg-center">
              <Col lg={3} md={5} sm={12} xs={12}>
                <div className="nombreDeLaEmpresa">
                  <label htmlFor="nombreDeLaEmpresa">
                    Nombre de la empresa
                  </label>
                  <br></br>
                  <input
                    type="text"
                    name="nombreDeLaEmpresa"
                    onChange={this.props.handleChange}
                    noValidate
                  />
                  <h4 className="erros">
                    {errors.nombreDeLaEmpresa.length > 0 && (
                      <span className="error">{errors.nombreDeLaEmpresa}</span>
                    )}
                  </h4>
                  <br></br>
                </div>
              </Col>
              <Col lg={3} md={5} sm={12} xs={12}>
                <div className="nombreDeContacto">
                  <label htmlFor="nombreDeContacto">Nombre de contacto</label>
                  <br></br>
                  <input
                    type="text"
                    name="nombreDeContacto"
                    onChange={this.props.handleChange}
                    noValidate
                  />
                  <h4 className="erros">
                    {errors.nombreDeContacto.length > 0 && (
                      <span className="error">{errors.nombreDeContacto}</span>
                    )}
                  </h4>
                  <br></br>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-lg-center">
              <Col lg={3} md={5} sm={12} xs={12}>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <br></br>
                  <input
                    type="email"
                    name="email"
                    onChange={this.props.handleChange}
                    noValidate
                  />
                  <h4 className="erros">
                    {errors.email.length > 0 && (
                      <span className="error">{errors.email}</span>
                    )}
                  </h4>
                  <br></br>
                </div>
              </Col>
              <Col lg={3} md={5} sm={12} xs={12}>
                <div className="pais">
                  <label htmlFor="pais">País</label>
                  <br></br>
                  <input
                    type="text"
                    name="pais"
                    onChange={this.props.handleChange}
                    noValidate
                  />
                  <h4 className="erros">
                    {errors.pais.length > 0 && (
                      <span className="error">{errors.pais}</span>
                    )}
                  </h4>
                  <br></br>
                </div>
              </Col>
            </Row>
            <div className="submit">{<Button>Create</Button>}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
