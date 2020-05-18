import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Home/Home";
import FormNew from "../FormNew/FormNew";
import Area from "../Area/Area";
import Form from "../Form/Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <div className="form-wrapper">
          <Form />
          <Area />
        </div>
      </div>
    );
  }
}

export default App;
