import React from "react";
import "./Furniture.scss";
import { Row, Col, Button, Form } from "react-bootstrap";
import Categories from "../Categories/Categories";
import { FURNITURES } from "../../constants";

class Furniture extends React.Component {
  render() {
    // console.log(this.props.furnitures, this.props.selectedCategories);
    return (
      <div clasName="section4">
        <div className="showFurnitureList">
          <h3 className="categorydisplay">{this.props.categoryChoosen}</h3>
          <ul>
            <Row className="justify-content-lg-center">
              {Object.keys(this.props.furnitures)
                .filter((furniture) => {
                  console.log(furniture);
                  return (
                    this.props.selectedCategories &&
                    this.props.selectedCategories.includes(
                      this.props.furnitures[furniture].category
                    )
                  );
                })
                .map((item) => (
                  <Col lg={3} md={3} sm={12} xs={12}>
                    <li
                      className="showFurniture"
                      key={this.props.furnitures[item].id}
                    >
                      <div className="showImage">
                        <img
                          className="image"
                          src={this.props.furnitures[item].image}
                        />
                      </div>
                      <div className="name">
                        {this.props.furnitures[item].name}
                      </div>
                      <div className="price">
                        ${this.props.furnitures[item].price} USD
                      </div>
                      <button
                        onClick={() =>
                          this.props.AddToFurnituresResume(
                            this.props.furnitures[item].id
                          )
                        }
                      >
                        +
                      </button>
                      <div className="quantity">
                        {this.props.furnituresResume[item]}
                      </div>
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

export default Furniture;
