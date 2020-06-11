import React, { useState, useEffect } from "react";
import "./Furniture.scss";
import { Row, Col, Button, Form } from "react-bootstrap";
import Categories from "../Categories/Categories";
import { ADD_PRODUCT_QUANTITY } from "../../constants";
import { REST_PRODUCT_QUANTITY } from "../../constants";
import { connect } from "react-redux";

const Furniture = ({
  FURNITURES,
  selectedCategories,
  dbFurnitures,
  addProductQuantity,
  furnituresResume,
  restProductQuantity,
}) => {
  console.log(furnituresResume);
  return (
    <div clasName="section4">
      <div className="showFurnitureList">
        {/* <h3 className="categorydisplay">{this.props.categoryChoosen}</h3> */}
        <ul>
          <Row className="justify-content-lg-center">
            {Object.keys(dbFurnitures)
              .filter((furniture) => {
                return (
                  selectedCategories &&
                  selectedCategories.includes(dbFurnitures[furniture].category)
                );
              })
              .map((item) => (
                <Col lg={3} md={3} sm={12} xs={12}>
                  <li className="showFurniture" key={dbFurnitures[item].id}>
                    <div className="showImage">
                      <img className="image" src={dbFurnitures[item].image} />
                    </div>
                    <div className="name">{dbFurnitures[item].name}</div>
                    <div className="price">${dbFurnitures[item].price} USD</div>
                    <button
                      onClick={() => addProductQuantity(dbFurnitures[item].id)}
                    >
                      +
                    </button>
                    <div className="quantity">{furnituresResume[item]}</div>
                    <button
                      onClick={() => restProductQuantity(dbFurnitures[item].id)}
                    >
                      -
                    </button>
                  </li>
                </Col>
              ))}
          </Row>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dbFurnitures: state.dbFurnitures,
  selectedCategories: state.selectedCategories,
  FURNITURES: state.FURNITURES,
  furnituresResume: state.furnituresResume,
});

const mapDispatchToProps = (dispatch) => ({
  addProductQuantity(productId) {
    dispatch({
      type: ADD_PRODUCT_QUANTITY,
      productId,
    });
  },
  restProductQuantity(productId) {
    dispatch({
      type: REST_PRODUCT_QUANTITY,
      productId,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Furniture);
