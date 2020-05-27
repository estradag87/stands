import React from "react";
import "./Resume.scss";
import {
  AREA_LIST,
  WALL_LISTS,
  FLOOR_OPTIONS,
  FURNITURES,
} from "../../constants";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <h2>RESUMEN DE TU STAND</h2>
        <h3>{this.props.nombreDeLaEmpresa}</h3>

        <div className="displayArea">
          <ul>
            {AREA_LIST.filter((area) => this.props.areaId === area.id).map(
              (item) => (
                <li className="showFurniture" key={item.id}>
                  <div className="sizeNumber">{item.size}</div>
                  <div className="size">metros</div>
                  <div className="price">{item.Price}</div>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="displayWalls">
          {WALL_LISTS.filter((wall) => this.props.wallId === wall.id).map(
            (item) => (
              <h4 className="nameWall" key={item.id}>
                {item.name}
              </h4>
            )
          )}
        </div>
        <div className="displayFloor">
          {FLOOR_OPTIONS.filter((floor) => this.props.floorId === floor.id).map(
            (item) => (
              <h4 className="nameFloor" key={item.id}>
                {item.name}
              </h4>
            )
          )}
        </div>
        <div className="displayFurniture">
          <ul>
            {FURNITURES.filter(
              (furniture) => this.props.itemQuantity[furniture.id] > 0
            ).map((item) => (
              <li className="showFurniture" key={item.id}>
                <div className="showImage">
                  <img className="image" src={item.image} />
                </div>
                <div className="name">{item.name}</div>
                <div className="price">${item.price} USD</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;
