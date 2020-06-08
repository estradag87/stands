import React from "react";
import "./Categories.scss";
import { Row, Col } from "react-bootstrap";
import Furniture from "../Furniture/Furniture";
import { CATEGORY_LIST } from "../../constants";

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedCategories: [] };

    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(categoryName) {
    console.log(11111, categoryName);
    // Check if selected categories includes new one, if exist, early return
    if (this.state.selectedCategories.includes(categoryName)) {
      return;
    }

    // [a, b, c] -> d
    // Sin ... -> [[a, b, c], d]
    // Con ... -> [a, b, c, d]
    // Destructuring ES6 -> Investigar
    const categoriesList = [...this.state.selectedCategories, categoryName];

    this.setState({ selectedCategories: categoriesList });
  }

  render() {
    return (
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
                    onClick={() => this.changeCategory(item.name)}
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
          selectedCategories={this.state.selectedCategories}
          itemQuantity={this.props.itemQuantity}
          AddToFurnituresResume={this.props.AddToFurnituresResume}
          furnitures={this.props.furnitures}
          furnituresResume={this.props.furnituresResume}
          subtractToFurnituresResume={this.subtractToFurnituresResume}
        />
      </div>
    );
  }
}

export default Categories;
