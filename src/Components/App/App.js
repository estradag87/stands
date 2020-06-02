import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Home from "../Home/Home";
import Area from "../Area/Area";
import Form from "../Form/Form";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Furniture from "../Furniture/Furniture";
import Resume from "../Resume/Resume";
import AddFurniture from "../AddFurniture";
import { FURNITURES } from "../../constants/index";

class App extends React.Component {
  state = {
    furnitures: {},
    furnituresResume: {},
    nombreDeLaEmpresa: null,
    nombreDeContacto: null,
    email: null,
    pais: null,
    wallId: "",
    floorId: "",
    areaId: "",
    errors: {
      nombreDeLaEmpresa: "",
      nombreDeContacto: "",
      email: "",
      pais: "",
    },
  };

  addNewFurniture = (furnitureNew) => {
    console.log("------------", furnitureNew);
    const furnitures = { ...this.state.furnitures };
    furnitures[`furniture${Date.now()}`] = furnitureNew;
    this.setState({ furnitures });
  };

  loadSampleFurniture = () => {
    this.setState({ furnitures: FURNITURES });
  };

  AddToFurnituresResume = (key) => {
    const furnituresResume = { ...this.state.furnituresResume };
    furnituresResume[key] = furnituresResume[key] + 1 || 1;
    this.setState({ furnituresResume });
  };

  changeWalls = (wallId) => {
    this.setState({ wallId });
  };

  changeFloor = (floorId) => {
    this.setState({ floorId });
  };

  changeArea = (areaId) => {
    this.setState({ areaId });
  };

  handleChange = (errors, name, value) => {
    this.setState({ errors, [name]: value });
  };

  render() {
    return (
      <div>
        <Home />
        <div className="form-wrapper">
          <Form
            nombreDeLaEmpresa={this.state.nombreDeLaEmpresa}
            nombreDeContacto={this.state.nombreDeContacto}
            email={this.state.email}
            pais={this.state.pais}
            errors={this.state.errors}
            handleChange={this.handleChange}
          />
          <Area changeArea={this.changeArea} areaId={this.state.areaId} />
          <Products
            changeWalls={this.changeWalls}
            changeFloor={this.changeFloor}
            wallId={this.state.wallId}
            floorId={this.state.floorId}
          />
          <Categories
            itemQuantity={this.state.itemQuantity}
            AddToFurnituresResume={this.AddToFurnituresResume}
            furnitures={this.state.furnitures}
            furnituresResume={this.state.furnituresResume}
          />
          <Resume
            nombreDeLaEmpresa={this.state.nombreDeLaEmpresa}
            areaId={this.state.areaId}
            wallId={this.state.wallId}
            floorId={this.state.floorId}
            itemQuantity={this.state.itemQuantity}
            changeQuantity={this.changeQuantity}
            furnitures={this.state.furnitures}
            furnituresResume={this.state.furnituresResume}
            AddToFurnituresResume={this.AddToFurnituresResume}
          />
          <AddFurniture
            addNewFurniture={this.addNewFurniture}
            loadSampleFurniture={this.loadSampleFurniture}
          />
        </div>
      </div>
    );
  }
}

export default App;
