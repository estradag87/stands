import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Home from "../Home/Home";
import Area from "../Area/Area";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Resume from "../Resume/Resume";
import AddFurniture from "../AddFurniture";
import { FURNITURES } from "../../constants/index";
import base, { firebaseApp } from "../../base";
import NavBar from "../Home/NavBar";

class UserResume extends React.Component {
  state = {
    furnitures: {},
    furnituresResume: {},
    wallId: "",
    floorId: "",
    areaId: "",
  };

  // componentDidMount() {
  //   const { params } = this.props.match;
  //   this.ref = base.syncState(
  //     `${params.nombreDeLaEmpresa}/furnituresResume/areaId`,
  //     {
  //       context: this,
  //       state: "areaId",
  //     }
  //   );
  //   this.ref = base.syncState(
  //     `${params.nombreDeLaEmpresa}/furnituresResume/wallId`,
  //     {
  //       context: this,
  //       state: "wallId",
  //     }
  //   );
  //   this.ref = base.syncState(
  //     `${params.nombreDeLaEmpresa}/furnituresResume/floorId`,
  //     {
  //       context: this,
  //       state: "floorId",
  //     }
  //   );
  //   this.ref = base.syncState(
  //     `${params.nombreDeLaEmpresa}/furnituresResume/furnitures`,
  //     {
  //       context: this,
  //       state: "furnitures",
  //     }
  //   );
  // }

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

  goToChart = (event) => {
    event.preventDefault();
    this.props.history.push(`/resume`);
  };

  addNewFurniture = (furnitureNew) => {
    console.log("------------", furnitureNew);
    const furnitures = { ...this.state.furnitures };
    furnitures[`furniture${Date.now()}`] = furnitureNew;
    this.setState({ furnitures });
  };

  componentWillMount() {
    this.setState({ furnitures: FURNITURES });
  }

  AddToFurnituresResume = (key) => {
    const furnituresResume = { ...this.state.furnituresResume };
    furnituresResume[key] = furnituresResume[key] + 1 || 1;
    this.setState({ furnituresResume });
  };

  // subtractToFurnituresResume = (key) => {
  //   const furnituresResume = { ...this.state.furnituresResume };
  //   furnituresResume[key] = furnituresResume[key] - 1 || 0;
  //   this.setState({ furnituresResume });
  // };

  changeWalls = (wallId) => {
    this.setState({ wallId });
  };

  changeFloor = (floorId) => {
    this.setState({ floorId });
  };

  changeArea = (areaId) => {
    this.setState({ areaId });
  };

  // test = async () => {
  //   const x = await firebaseApp
  //     .database()
  //     .ref("prueba/122" + new Date().valueOf())
  //     .set({
  //       name: "FUck",
  //       lastName: "You",
  //     });
  //   console.log(x);
  // };

  infoToBase = async () => {
    const x = await firebaseApp
      .database()
      .ref(this.props.match.params.nombreDeLaEmpresa)
      .set({
        Area: this.state.areaId,
        Walls: this.state.wallId,
        Floor: this.state.floorId,
        FurnituresSelected: this.state.furnituresResume,
      });
    console.log(x);
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="form-wrapper">
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
            subtractToFurnituresResume={this.subtractToFurnituresResume}
            furnitures={this.state.furnitures}
            furnituresResume={this.state.furnituresResume}
            goToChart={this.goToChart}
          />
          {/* <button onClick={(this.infoToBase, this.goToChart)}>COTIZAR</button> */}
          {/* <Resume
            nombreDeLaEmpresa={this.state.nombreDeLaEmpresa}
            areaId={this.state.areaId}
            wallId={this.state.wallId}
            floorId={this.state.floorId}
            itemQuantity={this.state.itemQuantity}
            changeQuantity={this.changeQuantity}
            furnitures={this.state.furnitures}
            furnituresResume={this.state.furnituresResume}
            AddToFurnituresResume={this.AddToFurnituresResume}
          /> */}
          {/* 
          <AddFurniture
            addNewFurniture={this.addNewFurniture}
            loadSampleFurniture={this.loadSampleFurniture} */}
          />
        </div>
      </div>
    );
  }
}

export default UserResume;
