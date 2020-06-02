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
            {Object.keys(this.props.furnituresResume).map((item) => (
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
                <div className="name">{this.props.furnitures[item].name}</div>
                <div className="quantity">
                  {this.props.furnituresResume[item]}
                </div>
                <div className="SumFurniture">
                  {this.props.furnitures[item].price *
                    (this.props.furnituresResume[item] || 0)}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className='total'>
              {(this.props.furnituresResume).reduce((prevTotal, item) => {
                prevTotal + {this.props.furnitures[item].price *
                    this.props.furnituresResume[item]};
              })}
              </div> */}
      </div>
    );
  }
}

export default Resume;
