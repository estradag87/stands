import React from "react";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";

class Chart extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <div className="form-wrapper"></div>
        <Resume />
      </div>
    );
  }
}

export default Chart;
