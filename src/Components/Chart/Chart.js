import React from "react";
import Resume from "../Resume/Resume";
import NavBar from "../Home/NavBar";

class Chart extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="form-wrapper-resume">
          <Resume />
        </div>
      </div>
    );
  }
}

export default Chart;
