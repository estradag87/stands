import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Home from "../Home/Home";
import FormNew from "../FormNew/FormNew";
import Area from "../Area/Area";
import Form from "../Form/Form";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Furniture from "../Furniture/Furniture";
import Resume from "../Resume/Resume";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreDeLaEmpresa: null,
      nombreDeContacto: null,
      email: null,
      pais: null,
      id: "",
      errors: {
        nombreDeLaEmpresa: "",
        nombreDeContacto: "",
        email: "",
        pais: "",
      },
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(myId) {
    this.setState({ id: myId });
  }

  handleChange = (errors, name, value) => {
    this.setState({ errors, [name]: value });
  };

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
          />
          <Area changeColor={this.changeColor} id={this.state.id} />
          <Products />
          <Categories />
          <Furniture />
          <Resume
            nombreDeLaEmpresa={this.state.nombreDeLaEmpresa}
            changeColor={this.changeColor}
            id={this.state.id}
          />
        </div>
      </div>
    );
  }
}

export default App;
