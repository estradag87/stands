import React from "react";
import "./Form.scss";
import { Row, Col, Button } from "react-bootstrap";
import { validEmailRegex, validateForm } from "../../utils";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component {
  state = {
    showNewStand: true,
    showModifyYourStand: false,
  };

  showFormNewStand = () => {
    this.setState({
      showNewStand: true,
      showModifyYourStand: false,
    });
  };

  showFormModifyYourStand = () => {
    this.setState({
      showNewStand: false,
      showModifyYourStand: true,
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.props.errors;

    switch (name) {
      case "nombreDeLaEmpresa":
        errors.nombreDeLaEmpresa =
          value.length < 2 ? "Debes darnos el nombre de tu empresa!" : "";
        break;
      case "nombreDeContacto":
        errors.nombreDeContacto =
          value.length < 2 ? "Debes darnos tu nombre!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "pais":
        errors.pais =
          value.length < 2
            ? "Debes darnos el nombre del país desde donde nos contactas!"
            : "";
      case "referenciaStand":
        errors.referenciaStand =
          value.length < 2 ? "Debes darnos un código válido!" : "";
        break;
      default:
        break;
    }

    this.props.handleChange(errors, name, value);
  };
  myInput = React.createRef();

  goToNewCompany = (event) => {
    event.preventDefault();
    const companyName = this.myInput.current.value;

    this.props.history.push(`/company/${companyName}${uuidv4()}`);

    if (validateForm(this.props.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  goToCompany = (event) => {
    event.preventDefault();
    const companyCode = this.myInput.current.value;

    this.props.history.push(`/company/${companyCode}`);

    if (validateForm(this.props.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.props;
    return (
      <div className="section2" id="crea">
        <button className="buttonTopForm" onClick={this.showFormNewStand}>
          Crea tu nuevo stand
        </button>
        <button
          className="buttonTopForm"
          onClick={this.showFormModifyYourStand}
        >
          Modifica tu stand
        </button>
        {this.state.showModifyYourStand && (
          <div>
            <h3 className="startInfo">
              INGRESA EL CÓDIGO DE REFERENCIA DE TU STAND
            </h3>
            <form onSubmit={this.goToCompany}>
              <div className="referenciaStand">
                <label htmlFor="referenciaStand"></label>
                <br></br>
                <input
                  type="text"
                  ref={this.myInput}
                  name="referenciaStand"
                  required
                  placeholder="Código de referencia"
                  onChange={this.handleChange}
                  noValidate
                />
                <h4 className="erros">
                  {errors &&
                    errors.referenciaStand &&
                    errors.referenciaStand.length > 0 && (
                      <span className="error">{errors.referenciaStand}</span>
                    )}
                </h4>
              </div>
              <div className="submit">
                <Button className="submitButton" type="submit">
                  Modificar
                </Button>
              </div>
            </form>
          </div>
        )}

        {this.state.showNewStand && (
          <div>
            <h3 className="startInfo">COMIENZA DANDONOS TUS DATOS</h3>
            <form onSubmit={this.goToNewCompany}>
              <Row className="justify-content-lg-center">
                <Col lg={4} md={6} sm={12} xs={12}>
                  <div className={("nombreDeLaEmpresa", "inputSpace")}>
                    <label htmlFor="nombreDeLaEmpresa"></label>
                    <br></br>
                    <input
                      type="text"
                      ref={this.myInput}
                      name="nombreDeLaEmpresa"
                      required
                      placeholder="Nombre de la empresa"
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
                <Col lg={4} md={6} sm={12} xs={12}>
                  <div className={("nombreDeContacto", "inputSpace")}>
                    <label htmlFor="nombreDeContacto"></label>
                    <br></br>
                    <input
                      type="text"
                      name="nombreDeContacto"
                      required
                      placeholder="Nombre de contacto"
                      onChange={this.handleChange}
                      noValidate
                    />
                    <h4 className="erros">
                      {errors &&
                        errors.nombreDeContacto &&
                        errors.nombreDeContacto.length > 0 && (
                          <span className="error">
                            {errors.nombreDeContacto}
                          </span>
                        )}
                    </h4>
                    <br></br>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-lg-center">
                <Col lg={4} md={6} sm={12} xs={12}>
                  <div className={("email", "inputSpace")}>
                    <label htmlFor="email"></label>
                    <br></br>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
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
                <Col lg={4} md={6} sm={12} xs={12}>
                  <div className={("pais", "inputSpace")}>
                    <label htmlFor="pais"></label>
                    <br></br>
                    <input
                      type="text"
                      name="pais"
                      required
                      placeholder="País"
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
              <div className="submit">
                <Button className="submitButton" type="submit">
                  Create
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
