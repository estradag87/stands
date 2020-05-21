import React from "react";
import "./Categories.scss";
import { Row, Col, Button } from "react-bootstrap";
import Furniture from "../Furniture/Furniture";

const categoryList = [
  {
    name: "Mesas",
    image:
      "https://static.wixstatic.com/media/8a7656_f7230551df5f469ca2eced3015fec46d~mv2.png/v1/fill/w_160,h_122,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
  },
  {
    name: "Sillas",
    image:
      "https://static.wixstatic.com/media/8a7656_ada04509174a415c849b5e23404eed87~mv2.png/v1/fill/w_140,h_186,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
  },
  {
    name: "Exhibidores",
    image:
      "https://static.wixstatic.com/media/8a7656_b9a2fb9f892e4d7f918c499f86a2ac02~mv2.png/v1/fill/w_138,h_128,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
  },
  {
    name: "Decoración",
    image:
      "https://static.wixstatic.com/media/8a7656_85245615480c4cde8264ba74972cb71d~mv2.png/v1/fill/w_144,h_139,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
  },
];

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: "" };

    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(myId) {
    this.setState({ id: myId });
  }

  render() {
    return (
      <div className="showCategoiesList">
        <ul>
          <Row className="justify-content-lg-center">
            {categoryList.map((item) => (
              <Col lg={3} md={3} sm={12} xs={12}>
                <li
                  onClick={() => this.changeCategory(item.id)}
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
    );
  }
}

export default Categories;
