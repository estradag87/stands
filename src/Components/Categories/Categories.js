import React from "react";
import "./Categories.scss";
import { Row, Col } from "react-bootstrap";
import Furniture from "../Furniture/Furniture";
import { CHANGE_CATEGORY } from "../../constants";
import { connect } from "react-redux";

const Categories = ({
  CATEGORY_LIST,
  changeCategory,
  categoryName,
  selectedCategories,
  addToFurnituresResume,
  furnitures,
  furnituresResume,
  goToChart,
}) => (
  <div>
    <div className="showCategoiesList">
      <h3 className="categoryProducts">
        CATEGORIA DE <br></br>PRODUCTOS
      </h3>
      <div className="whiteBar"></div>
      <h4 className="choose">Escoge que poductos deseas agregar</h4>

      <Row className="justify-content-lg-center">
        {CATEGORY_LIST.map((item) => (
          <Col lg={3} md={3} sm={6} xs={6}>
            <li
              onClick={() => changeCategory(item.name)}
              className="showCategories"
              key={item.id}
            >
              <img className="imageCategory" src={item.image} />
              <div className="nameCategory">{item.name}</div>
            </li>
          </Col>
        ))}
      </Row>
    </div>
    <Furniture
      addToFurnituresResume={addToFurnituresResume}
      furnitures={furnitures}
      furnituresResume={furnituresResume}
      goToChart={goToChart}
    />
  </div>
);

const mapStateToProps = (state) => ({
  CATEGORY_LIST: state.CATEGORY_LIST,
  selectedCategories: state.selectedCategories,
  goToChart: state.goToChart,
});

const mapDispatchToProps = (dispatch) => ({
  changeCategory(categoryName) {
    dispatch({
      type: CHANGE_CATEGORY,
      categoryName,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
