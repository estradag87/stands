import React from "react";
import "./Resume.scss";

class Resume extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>RESUMEN DE TU STAND</h2>
        <h3>nomre empresa {this.props.nombreDeLaEmpresa} </h3>
        <ul>
          {this.props.areaList
            .filter((area) => this.props.id === area.id)
            .map((item) => (
              <li className="showFurniture" key={item.id}>
                <div className="sizeNumber">{item.size}</div>
                <div className="size">metros</div>
                <div className="price">{item.Price}</div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Resume;
