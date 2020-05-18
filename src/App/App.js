import React from "react";
import "./App.css";
import Home from "../Home/Home";
import Crea from "../Crea/Crea";

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Crea />
      </div>
    );
  }
}

export default App;
