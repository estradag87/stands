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
    this.state = {};
  }

  render() {
    return (
      <div>
        <Home />
        <div className="form-wrapper">
          <Form />
          <Area />
          <Products />
          <Categories />
          <Furniture />
          <Resume />
        </div>
      </div>
    );
  }
}

export default App;
