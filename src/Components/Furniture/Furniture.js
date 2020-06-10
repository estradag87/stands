import React, { useState, useEffect } from "react";
import "./Furniture.scss";
import { Row, Col, Button, Form } from "react-bootstrap";
import Categories from "../Categories/Categories";
import { FURNITURES } from "../../constants";
import { connect } from "react-redux";

const Area = ({ FURNITURES, selectedCategories, furnitures }) => (

  const [count, setCount] = useState(0);

  useEffect(() => {
    furnitures: FURNITURES 
  });

// class Furniture extends React.Component {
//   render() {
//     // console.log(this.props.furnitures, this.props.selectedCategories);
//     return (
      <div clasName="section4">
        <div className="showFurnitureList">
          <h3 className="categorydisplay">{this.props.categoryChoosen}</h3>
          <ul>
            <Row className="justify-content-lg-center">
              {Object.keys(furnitures)
                .filter((furniture) => {
                  console.log(furniture);
                  return (
                    selectedCategories &&
                    selectedCategories.includes(
                      furnitures[furniture].category
                    )
                  );
                })
                .map((item) => (
                  <Col lg={3} md={3} sm={12} xs={12}>
                    <li
                      className="showFurniture"
                      key={furnitures[item].id}
                    >
                      <div className="showImage">
                        <img
                          className="image"
                          src={furnitures[item].image}
                        />
                      </div>
                      <div className="name">
                        {furnitures[item].name}
                      </div>
                      <div className="price">
                        ${furnitures[item].price} USD
                      </div>
                      <button
                        onClick={() =>
                          setCount(count + 1)}>
                        +
                      </button>
                      <div className="quantity">
                        {this.props.furnituresResume[item]}
                      </div>
                      {/* <button
                        onClick={() =>
                          this.props.subtractToFurnituresResume(
                            this.props.furnitures[item].id
                          )
                        }
                      >
                        -
                      </button> */}
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
  furnitures: state.furnitures,
  FURNITURES: state.FURNITURES,
});

const mapDispatchToProps = (dispatch) => ({
  chooseAre(area) {
    dispatch({
      type: "CHOOSE_AREA",
      area,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Furniture);

