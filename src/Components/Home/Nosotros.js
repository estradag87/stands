import React from "react";
import "./Home.scss";
import { TEAM } from "../../constants/fakeDb";
import { Row, Col } from "react-bootstrap";

class Nosotros extends React.Component {
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
        <div className="displayTeam">
          <h2>NOSOTROS</h2>
          <h4>¡Conoce nuestro equipo de trabajo!</h4>
          <div className="yellowBar"></div>
        </div>
        <div
          className={`teamElements ${
            this.state.displayImage === true
              ? "animate__animated animate__bounceInDown"
              : ""
          }`}
        >
          <ul className="displayTeam">
            <Row className="justify-content-lg-center">
              {TEAM.map((item) => (
                <Col lg={4} md={3} sm={12} xs={12}>
                  <li className="teamFormer" key={item.id}>
                    <img className="imageTeam" src={item.image} />
                    <div className="nameTeam">{item.name}</div>
                    <div className="rollTeam">{item.roll}</div>
                    <div className="descriptionTeam">{item.description}</div>
                  </li>
                </Col>
              ))}
            </Row>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nosotros;
