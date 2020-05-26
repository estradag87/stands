import React from "react";
import "./Form.scss";
import { Row, Col, Button } from "react-bootstrap";
import { validEmailRegex, validateForm } from "../../utils";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.props.errors;

    switch (name) {
      case "nombreDeLaEmpresa":
        errors.nombreDeLaEmpresa =
          value.length < 1 ? "Debes darnos el nombre de tu empresa!" : "";
        break;
      case "nombreDeContacto":
        errors.nombreDeContacto =
          value.length < 1 ? "Debes darnos tu nombre!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "pais":
        errors.pais =
          value.length < 1
            ? "Debes darnos el nombre del país desde donde nos contactas!"
            : "";
        break;
      default:
        break;
    }

    this.props.handleChange(errors, name, value);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (validateForm(this.props.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="section2">
        <div>
          <h3 className="startInfo">COMIENZA DANDONOS TUS DATOS</h3>
          <form onSubmit={this.handleSubmit} noValidate>
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
                    onChange={this.handleChange}
                    noValidate
                  />
                  <h4 className="erros">
                    {errors &&
                      errors.nombreDeLaEmpresa &&
                      errors.nombreDeLaEmpresa.length > 0 && (
                        <span className="error">
                          {errors.nombreDeLaEmpresa}
                        </span>
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
                    onChange={this.handleChange}
                    noValidate
                  />
                  <h4 className="erros">
                    {errors &&
                      errors.nombreDeContacto &&
                      errors.nombreDeContacto.length > 0 && (
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
                    onChange={this.handleChange}
                    noValidate
                  />
                  <h4 className="erros">
                    {errors && errors.email && errors.email.length > 0 && (
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
                    onChange={this.handleChange}
                    noValidate
                  />
                  <h4 className="erros">
                    {errors && errors.pais && errors.pais.length > 0 && (
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
