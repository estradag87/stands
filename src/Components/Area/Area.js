import React from "react";
import "./Area.scss";
import { Row, Col } from "react-bootstrap";
import { AREA_LIST } from "../../constants";
import { connect } from "react-redux";

const Area = ({ AREA_LIST, chooseAre, areaId }) => (
  <div>
    <h3 className="areaSelection">SELECCIONA EL AREA DE TU STAND</h3>
    <ul className="displayArea">
      <Row className="justify-content-lg-center">
        {AREA_LIST.map((item) => (
          <Col lg={4} md={3} sm={12} xs={12}>
            <li
              onClick={() => chooseAre(item.id)}
              className={`portafolio ${
                item.id === areaId ? "active" : areaId ? "inactive" : ""
              }`}
              key={item.id}
            >
              <img className="image" src={item.image} />
              <div className="sizeNumber">{item.size}</div>
              <div className="size">metros</div>
              <div className="includes">Incluye:</div>
              <div className="includes1">{item.Includes1}</div>
              <div className="includes2">{item.Includes2}</div>
              <div className="priceText">Precio desde</div>
              <div className="price">{item.Price}</div>
            </li>
          </Col>
        ))}
      </Row>
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  AREA_LIST: state.AREA_LIST,
  areaId: state.areaId,
});

const mapDispatchToProps = (dispatch) => ({
  chooseAre(area) {
    dispatch({
      type: "CHOOSE_AREA",
      area,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Area);
