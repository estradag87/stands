import React from "react";
import "./Home.scss";
import NavBar from "./NavBar";

class home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { displayImage: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      displayImage: true,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="banner">
          <div className="standAlone">
            <img
              className="imagenHome"
              src="/stand-con-vendedoras.png"
              alt="Stand Alone"
            />
            <h2 className="textFirst">
              DEJANOS A NOSOTROS <br></br>HACER TU STAND...
            </h2>
          </div>
          <div
            className={`standFull ${
              this.state.displayImage === true
                ? "animate__animated animate__bounceInDown"
                : ""
            }`}
          >
            <img className="imagenHome" src="/clientes.png" alt="Stand Full" />
            <h2 className="textSecond">
              Y TE LLOVERAN <br></br>LOS CLIENTES!!!
            </h2>
          </div>
        </div>
        <div className="BuiltYourOwnStand">
          <h2>CREA TU PROPIO STAND</h2>
          <h4>
            En 12 horas o menos recibirás el render de tu stand junto con la
            cotización según tu personalización
          </h4>
        </div>
        <div className="yellowBar"></div>
      </div>
    );
  }
}

export default home;
