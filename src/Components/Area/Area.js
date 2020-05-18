import React from "react";
import "./Area.scss";
import { Row, Col, Button } from "react-bootstrap";

const list = [
  {
    id: 5,
    image:
      "https://static.wixstatic.com/media/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg/v1/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01/c19c76_22d8ec47d1484b09a9c333e4141a12a0.webp",
    size: "5 metros",
    Includes1: "- Pisos",
    Includes2: "- Branding de la paneleria",
    Price: "$1.000 USD",
  },
  {
    id: 10,
    image:
      "https://static.wixstatic.com/media/c19c76_8c7f5eed08b047bdaaf2833985c4b3d7.jpg/v1/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01/c19c76_8c7f5eed08b047bdaaf2833985c4b3d7.webp",
    size: "10 metros",
    Includes1: "- Pisos",
    Includes2: "- Branding de la paneleria",
    Price: "$1.500 USD",
  },
  {
    id: 15,
    image:
      "https://static.wixstatic.com/media/c19c76_e1a7148276024a03a7b0772c5a8fb9e7.jpg/v1/fill/w_300,h_226,al_c,q_80,usm_0.66_1.00_0.01/c19c76_e1a7148276024a03a7b0772c5a8fb9e7.webp",
    size: "15 metros",
    Includes1: "- Pisos",
    Includes2: "- Branding de la paneleria",
    Price: "$2.000 USD",
  },
];

class Area extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({ id: id });
  }

  render() {
    return (
      <div>
        <h3>SELECCIONA EL AREA DE TU STAND</h3>
        <ul>
          <Row className="justify-content-lg-center">
            {list.map((item) => (
              <Col lg={4} md={3} sm={12} xs={12}>
                <li
                  onClick={this.changeColor}
                  className="portafolio"
                  key={item.id}
                >
                  <img className="image" src={item.image} />
                  <div className="size">{item.size}</div>
                  <div className="includes">Incluye:</div>
                  <div className="includes1">{item.Includes1}</div>
                  <div className="includes2">{item.Includes2}</div>
                  <div className="price">Precio desde</div>
                  <div className="price">{item.Price}</div>
                </li>
              </Col>
            ))}
          </Row>
        </ul>
      </div>
    );
  }
}

export default Area;
