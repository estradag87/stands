import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Area from "../Area/Area";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";

import NavBar from "../Home/NavBar";

class UserResume extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="form-wrapper">
          <Area />
          <Products />
          <Categories />
        </div>
      </div>
    );
  }
}

export default UserResume;
