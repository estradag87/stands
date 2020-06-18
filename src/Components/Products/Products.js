import React from "react";
import "./Products.scss";
import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";

const Products = ({
  WALL_LISTS,
  FLOOR_OPTIONS,
  changeWalls,
  wallId,
  changeFloor,
  floorId,
}) => (
  <div className="section3">
    <div className="walls">
      <h3 className="standTipe">CUENTANOS CÓMO ES TU STAND</h3>
      <ul>
        <Row className="justify-content-lg-center">
          {WALL_LISTS.map((item) => (
            <Col lg={6} md={3} sm={12} xs={12}>
              <li
                onClick={() => changeWalls(item.id)}
                className={`desing ${
                  item.id === wallId ? "space" : wallId ? "noSpace" : ""
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
                onClick={() => changeFloor(item.id)}
                className={`desing ${
                  item.id === floorId
                    ? "floorTipe"
                    : floorId
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
//   }
// }

const mapStateToProps = (state) => ({
  WALL_LISTS: state.WALL_LISTS,
  wallId: state.wallId,
  FLOOR_OPTIONS: state.FLOOR_OPTIONS,
  floorId: state.floorId,
});

const mapDispatchToProps = (dispatch) => ({
  changeWalls(wall) {
    dispatch({
      type: "CHANGE_WALLS",
      wall,
    });
  },
  changeFloor(floor) {
    dispatch({
      type: "CHANGE_FLOOR",
      floor,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
