import React from "react";
import "./Products.scss";
import { Row, Col } from "react-bootstrap";
import { WALL_LISTS, FLOOR_OPTIONS } from "../../constants";

class Products extends React.Component {
  render() {
    return (
      <div className="section3">
        <div className="walls">
          <h3 className="standTipe">CUENTANOS CÓMO ES TU STAND</h3>
          <ul>
            <Row className="justify-content-lg-center">
              {WALL_LISTS.map((item) => (
                <Col lg={6} md={3} sm={12} xs={12}>
                  <li
                    onClick={() => this.props.changeWalls(item.id)}
                    className={`desing ${
                      item.id === this.props.wallId
                        ? "space"
                        : this.props.wallId
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
                    onClick={() => this.props.changeFloor(item.id)}
                    className={`desing ${
                      item.id === this.props.floorId
                        ? "floorTipe"
                        : this.props.floorId
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
