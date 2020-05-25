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

const areaList = [
  {
    id: 5,
    image:
      "https://static.wixstatic.com/media/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg/v1/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01/c19c76_22d8ec47d1484b09a9c333e4141a12a0.webp",
    size: 5,
    Includes1: "- Pisos",
    Includes2: "- Branding de la paneleria",
    Price: "$1.000 USD",
  },
  {
    id: 10,
    image:
      "https://static.wixstatic.com/media/c19c76_8c7f5eed08b047bdaaf2833985c4b3d7.jpg/v1/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01/c19c76_8c7f5eed08b047bdaaf2833985c4b3d7.webp",
    size: 10,
    Includes1: "- Pisos",
    Includes2: "- Branding de la paneleria",
    Price: "$1.500 USD",
  },
  {
    id: 15,
    image:
      "https://static.wixstatic.com/media/c19c76_e1a7148276024a03a7b0772c5a8fb9e7.jpg/v1/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01/c19c76_e1a7148276024a03a7b0772c5a8fb9e7.webp",
    size: 15,
    Includes1: "- Pisos",
    Includes2: "- Branding de la paneleria",
    Price: "$2.000 USD",
  },
];

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

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

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

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

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
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
            handleSubmit={this.handleSubmit}
          />
          <Area
            changeColor={this.changeColor}
            id={this.state.id}
            areaList={areaList}
          />
          <Products />
          <Categories />
          <Furniture />
          <Resume
            nombreDeLaEmpresa={this.state.nombreDeLaEmpresa}
            changeColor={this.changeColor}
            id={this.state.id}
            areaList={areaList}
          />
        </div>
      </div>
    );
  }
}

export default App;
