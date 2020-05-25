import React from "react";
import "./Furniture.scss";
import { Row, Col, Button, Form } from "react-bootstrap";
import Categories from "../Categories/Categories";

const Furnitures = [
  {
    id: "mesa1",
    image:
      "https://static.wixstatic.com/media/8a7656_f7230551df5f469ca2eced3015fec46d~mv2.png/v1/fill/w_160,h_122,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "Escritorio Madera",
    price: 100,
    category: "Mesas",
    quantity: 1,
  },
  {
    id: "mesa2",
    image:
      "https://static.wixstatic.com/media/8a7656_05adf208278e4d6d980253b41d2fa018~mv2.png/v1/fill/w_123,h_122,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "Escritorio Blanco",
    price: 120,
    category: "Mesas",
    quantity: 1,
  },
  {
    id: "mesa3",
    image:
      "https://static.wixstatic.com/media/8a7656_b50375255f3448db856fa0235b3f72e7~mv2.png/v1/fill/w_127,h_117,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_3.webp",
    name: "Mesa Redonda",
    price: 80,
    category: "Mesas",
    quantity: 1,
  },
  {
    id: "silla1",
    image:
      "https://static.wixstatic.com/media/8a7656_4a5bcc296c174e78983892460b58e5c4~mv2.png/v1/fill/w_99,h_128,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "Silla Blanca",
    price: 20,
    category: "Sillas",
    quantity: 1,
  },
  {
    id: "silla2",
    image:
      "https://static.wixstatic.com/media/8a7656_28f3ca61f0644c39af47ab7a38991c72~mv2.png/v1/fill/w_78,h_128,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "Butaco Bajito",
    price: 15,
    category: "Sillas",
    quantity: 1,
  },
  {
    id: "silla3",
    image:
      "https://static.wixstatic.com/media/8a7656_ada04509174a415c849b5e23404eed87~mv2.png/v1/fill/w_140,h_186,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "Taurete Blanco",
    price: 25,
    category: "Sillas",
    quantity: 1,
  },
  {
    id: "exhibidor1",
    image:
      "https://static.wixstatic.com/media/8a7656_0dab4ceaaa3e4a2098034a758e08c57c~mv2.png/v1/fill/w_93,h_108,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "Cajonera",
    price: 20,
    category: "Exhibidores",
    quantity: 1,
  },
  {
    id: "exhibidor2",
    image:
      "https://static.wixstatic.com/media/8a7656_b9a2fb9f892e4d7f918c499f86a2ac02~mv2.png/v1/fill/w_138,h_128,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "Rack",
    price: 25,
    category: "Exhibidores",
    quantity: 1,
  },
  {
    id: "exhibidor3",
    image:
      "https://static.wixstatic.com/media/8a7656_b8afb341db5840dd95d31b93d847fddf~mv2.png/v1/fill/w_64,h_128,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "Gondola",
    price: 18,
    category: "Exhibidores",
    quantity: 1,
  },
  {
    id: "decoracion1",
    image:
      "https://static.wixstatic.com/media/8a7656_85245615480c4cde8264ba74972cb71d~mv2.png/v1/fill/w_144,h_139,al_c,q_85,usm_0.66_1.00_0.01/Captura%20de%20pantalla%202020-02-29%20a%20las%207_4.webp",
    name: "Matas",
    price: 5,
    category: "Decoración",
    quantity: 1,
  },
];

class Furniture extends React.Component {
  constructor(props) {
    super(props);

    this.state = { quantity: 0 };

    this.changeQuantity = this.changeQuantity.bind(this);
  }
  changeQuantity(e, itemId) {
    this.setState({ [itemId]: e.target.value });
  }

  render() {
    return (
      <div clasName="section4">
        <div className="showFurnitureList">
          <h3 className="categorydisplay">{this.props.categoryChoosen}</h3>
          <ul>
            <Row className="justify-content-lg-center">
              {Furnitures.filter(
                (furniture) => furniture.category === this.props.categoryChoosen
              ).map((item) => (
                <Col lg={3} md={3} sm={12} xs={12}>
                  <li className="showFurniture" key={item.id}>
                    <div className="showImage">
                      <img className="image" src={item.image} />
                    </div>
                    <div className="name">{item.name}</div>
                    <div className="price">${item.price} USD</div>
                    <form>
                      <Form.Group
                        controlId="exampleForm.ControlSelect1"
                        className="selection"
                      >
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={(e) => this.changeQuantity(e, item.id)}
                        >
                          <option>---</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Form.Group>
                    </form>
                    <div className="SumFurniture">
                      {item.price * (this.state[item.id] || 0)}
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
