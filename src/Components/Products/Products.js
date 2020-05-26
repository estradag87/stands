import React from "react";
import "./Products.scss";
import { Row, Col } from "react-bootstrap";
import { PRODUCTS_LISTS, FLOOR_OPTIONS } from "../../constants";

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
          <h3 className="standTipe">CUENTANOS CÓMO ES TU STAND</h3>
          <ul>
            <Row className="justify-content-lg-center">
              {PRODUCTS_LISTS.map((item) => (
                <Col lg={6} md={3} sm={12} xs={12}>
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
                    <img className="imageArea" src={item.image} />
                    <div className="name">{item.name}</div>
                  </li>
                </Col>
              ))}
            </Row>
          </ul>
        </div>
        <div className="Floor">
          <h3 className="standTipe">ESCOGE EL PISO</h3>
          <ul>
            <Row className="justify-content-lg-center">
              {FLOOR_OPTIONS.map((item) => (
                <Col lg={4} md={3} sm={12} xs={12}>
                  <li
                    onClick={() => this.changeFloor(item.name)}
                    className={`desing ${
                      item.name === this.state.name
                        ? "floorTipe"
                        : this.state.name
                        ? "noFloorTipe"
                        : ""
                    }`}
                    key={item.id}
                  >
                    <img className="imageFloor" src={item.image} />
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
