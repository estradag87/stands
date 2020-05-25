import React from "react";
import "./Categories.scss";
import { Row, Col, Button } from "react-bootstrap";
import Furniture from "../Furniture/Furniture";

const categoryList = [
  {
    name: "Mesas",
    image: "/FotosCategorias/mesa.jpg",
  },
  {
    name: "Sillas",
    image: "/FotosCategorias/silla.jpg",
  },
  {
    name: "Exhibidores",
    image: "/FotosCategorias/racks.jpg",
  },
  {
    name: "Decoración",
    image: "/FotosCategorias/matas.jpg",
  },
];

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "" };

    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(myName) {
    this.setState({ name: myName });
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
              {categoryList.map((item) => (
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
        <Furniture categoryChoosen={this.state.name} />
      </div>
    );
  }
}

export default Categories;
