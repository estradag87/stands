import React from "react";
import "./Categories.scss";
import { Row, Col } from "react-bootstrap";
import Furniture from "../Furniture/Furniture";
import { CHANGE_CATEGORY } from "../../constants";
import { connect } from "react-redux";

// const x = { a: 1 }
// const { a } = x -> x.a -> 1

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
      <ul>
        <Row className="justify-content-lg-center">
          {CATEGORY_LIST.map((item) => (
            <Col lg={3} md={3} sm={12} xs={12}>
              <li
                onClick={() => changeCategory(item.name)}
                className="showCategories"
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
