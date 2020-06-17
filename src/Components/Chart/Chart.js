import React from "react";
import Resume from "../Resume/Resume";
import NavBar from "../Home/NavBar";

class Chart extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Resume />
      </div>
    );
  }
}

export default Chart;
