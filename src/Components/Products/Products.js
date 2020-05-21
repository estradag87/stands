import React from "react";
import "./Products.scss";
import { Row, Col, Form } from "react-bootstrap";

const list = [
  {
    id: "3paredes",
    image:
      "https://static.wixstatic.com/media/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg/v1/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01/c19c76_22d8ec47d1484b09a9c333e4141a12a0.webp",
    name: "3 paredes",
  },
  {
    id: "2paredesIzquierda",
    image:
      "https://static.wixstatic.com/media/c19c76_8c7f5eed08b047bdaaf2833985c4b3d7.jpg/v1/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01/c19c76_8c7f5eed08b047bdaaf2833985c4b3d7.webp",
    name: "2 paredes izquierda",
  },
  {
    id: "2paredesDerecha",
    image:
      "https://static.wixstatic.com/media/c19c76_e1a7148276024a03a7b0772c5a8fb9e7.jpg/v1/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01/c19c76_e1a7148276024a03a7b0772c5a8fb9e7.webp",
    name: "2 paredes derecha",
  },
];

const options = [
  {
    id: "pisoClaro",
    image:
      "https://static.wixstatic.com/media/8a7656_8cb2a5c874394fc4beb43231976a86dc~mv2.png/v1/fill/w_135,h_108,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "CLARO",
  },
  {
    id: "pisoOscuro",
    image:
      "https://static.wixstatic.com/media/8a7656_7ed21eed225c4256b8c19a2f2e50d919~mv2.png/v1/fill/w_141,h_122,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "OSCURO",
  },
];

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "" };

    this.changeColor = this.changeColor.bind(this);
    this.changeFloor = this.changeFloor.bind(this);
  }

  changeColor(myId) {
    this.setState({ id: myId });
  }

  changeFloor(myName) {
    this.setState({ name: myName });
  }

  render() {
    return (
      <div className="section3">
        <div className="walls">
          <h3>CUENTANOS CÓMO SON LOS PLANOS DE TU STAND</h3>
          <ul>
            <Row className="justify-content-lg-center">
              {list.map((item) => (
                <Col lg={4} md={3} sm={12} xs={12}>
                  <li
                    onClick={() => this.changeColor(item.id)}
                    className={`desing ${
                      item.id === this.state.id
                        ? "space"
                        : this.state.id
                        ? "noSpace"
                        : ""
                    }`}
                    key={item.id}
                  >
                    <img className="image" src={item.image} />
                    <div className="name">{item.name}</div>
                  </li>
                </Col>
              ))}
            </Row>
          </ul>
        </div>
        <div className="Floor">
          <h3>Y DE QUE COLOR TE GUSTARIA QUE FUERA EL PISO</h3>
          <ul>
            <Row className="justify-content-lg-center">
              {options.map((item) => (
                <Col lg={4} md={3} sm={12} xs={12}>
                  <li
                    onClick={() => this.changeFloor(item.name)}
                    className={`desing ${
                      item.name === this.state.name
                        ? "space"
                        : this.state.name
                        ? "noSpace"
                        : ""
                    }`}
                    key={item.id}
                  >
                    <img className="image" src={item.image} />
                    <div className="name">{item.name}</div>
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

export default Products;
