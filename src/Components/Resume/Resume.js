import React from "react";
import "./Resume.scss";
import {
  AREA_LIST,
  WALL_LISTS,
  FLOOR_OPTIONS,
  FURNITURES,
} from "../../constants";
import { connect } from "react-redux";
import NavBar from "../Home/NavBar";

const Resume = ({
  FURNITURES,
  selectedCategories,
  dbFurnitures,
  addProductQuantity,
  furnituresResume,
  AREA_LIST,
  areaId,
  WALL_LISTS,
  FLOOR_OPTIONS,
  wallId,
  floorId,
}) => {
  let sumArea = 0;
  if (areaId === 5) {
    sumArea = 1000;
  } else if (areaId === 10) {
    sumArea = 1500;
  } else if (areaId === 15) {
    sumArea = 2000;
  } else {
    sumArea = 0;
  }

  return (
    <div>
      <h2>RESUMEN DE TU STAND</h2>
      {/* <h3>{this.props.nombreDeLaEmpresa}</h3> */}

      <div className="displayArea">
        <ul>
          {AREA_LIST.filter((area) => areaId === area.id).map((item) => (
            <li className="showFurniture" key={item.id}>
              <div className="sizeNumber">{item.size}</div>
              <div className="size">metros</div>
              <div className="price">{item.Price}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="displayWalls">
        {WALL_LISTS.filter((wall) => wallId === wall.id).map((item) => (
          <h4 className="nameWall" key={item.id}>
            {item.name}
          </h4>
        ))}
      </div>
      <div className="displayFloor">
        {FLOOR_OPTIONS.filter((floor) => floorId === floor.id).map((item) => (
          <h4 className="nameFloor" key={item.id}>
            {item.name}
          </h4>
        ))}
      </div>
      <div className="displayFurniture">
        <ul>
          {Object.keys(furnituresResume)
            .filter((xax) => {
              return furnituresResume[xax] >= 1;
            })
            .map((item) => (
              <li className="showFurniture" key={dbFurnitures[item].id}>
                <div className="showImage">
                  <img className="image" src={dbFurnitures[item].image} />
                </div>
                <div className="name">{dbFurnitures[item].name}</div>
                <div className="quantity">{furnituresResume[item]}</div>
                <div className="SumFurniture">
                  {dbFurnitures[item].price * (furnituresResume[item] || 0)}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="total">
        {Object.keys(furnituresResume).reduce((prevTotal, item) => {
          return prevTotal + dbFurnitures[item].price * furnituresResume[item];
        }, sumArea)}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  AREA_LIST: state.AREA_LIST,
  areaId: state.areaId,
  dbFurnitures: state.dbFurnitures,
  selectedCategories: state.selectedCategories,
  FURNITURES: state.FURNITURES,
  furnituresResume: state.furnituresResume,
  WALL_LISTS: state.WALL_LISTS,
  wallId: state.wallId,
  FLOOR_OPTIONS: state.FLOOR_OPTIONS,
  floorId: state.floorId,
});

const mapDispatchToProps = (dispatch) => ({
  chooseAre(area) {
    dispatch({
      type: "CHOOSE_AREA",
      area,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
