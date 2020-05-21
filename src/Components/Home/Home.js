import React from "react";
import "./Home.scss";

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
    console.log("---------");
    this.setState({
      displayImage: true,
    });
  };

  // handleScroll(e) {
  //   console.log("¿¿¿¿¿¿");
  //   let element = e.target;
  //   if (element.scrollHeight - element.scrollTop === element.clientHeight) {
  //     console.log("¿¿¿¿¿¿");

  //     // this.setState({
  //     //   handleScroll: true,
  //     // });
  //   }
  // }

  render() {
    return (
      <div>
        <div className="topnav">
          <a href="#contacto">Contacto</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="../Crea/Crea.js">Crea Tu Propio Stand</a>
          <a className="active" href="#home">
            Home
          </a>
          <img
            className="logoBanner"
            src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-5/tsunami-coffee/images/beans.png"
            alt="logo face"
            height="42"
            width="42"
          />
        </div>
        <div>
          <h1 className="mensaje">
            <span className="negrillaMensaje">LÍDERES EN CALIDAD Y DISEÑO</span>{" "}
            <br></br> <span>DE STANDS PARA FERIAS EN MEDELLÍN</span>
          </h1>
        </div>
        <div className="banner">
          <div className="standAlone">
            <img
              className="imageStandAlone"
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
            <img
              className="imageStandFull"
              src="/clientes.png"
              alt="Stand Full"
            />
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
