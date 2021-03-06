import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Home from "../Home/Home";
import Form from "../Form/Form";
import Nosotros from "../Home/Nosotros";
import Proyectos from "../Home/Proyectos";

class App extends React.Component {
  state = {
    nombreDeLaEmpresa: null,
    nombreDeContacto: null,
    email: null,
    pais: null,
    errors: {
      nombreDeLaEmpresa: "",
      nombreDeContacto: "",
      email: "",
      pais: "",
      referenciaStand: "",
    },
  };

  handleChange = (errors, name, value) => {
    this.setState({ errors, [name]: value });
  };

  // changeHandlerCountry(e) {
  //   this.setState({
  //     pais: e.target.current.value,
  //   });
  // }

  render() {
    return (
      <div>
        <Home />
        <div className="form-wrapper">
          <Form
            nombreDeLaEmpresa={this.state.nombreDeLaEmpresa}
            nombreDeContacto={this.state.nombreDeContacto}
            email={this.state.email}
            pais={this.state.pais}
            errors={this.state.errors}
            handleChange={this.handleChange}
            history={this.props.history}
            match={this.props.match}
          />
        </div>
        <Nosotros />
        <Proyectos />
      </div>
    );
  }
}

export default App;
