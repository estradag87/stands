import React from "react";
import "./Furniture.scss";
import { Row, Col, Button, Form } from "react-bootstrap";
import Categories from "../Categories/Categories";
import { FURNITURES } from "../../constants";

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
              {FURNITURES.filter(
                (furniture) =>
                  this.props.selectedCategories &&
                  this.props.selectedCategories.includes(furniture.category)
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
