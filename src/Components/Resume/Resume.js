import React from "react";
import "./Resume.scss";
import { connect } from "react-redux";

import { ADD_PRODUCT_QUANTITY } from "../../constants";
import { REST_PRODUCT_QUANTITY } from "../../constants";
import Table from "react-bootstrap/Table";

const Resume = ({
  dbFurnitures,
  addProductQuantity,
  restProductQuantity,
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
    <div className="tableStyle">
      <h2 className="resumeTitle">RESUMEN DE TU STAND</h2>

      <div className="tableinfo">
        <Table responsive="sm">
          <thead>
            <tr className="tableTittles">
              <th colspan="4">DETALLE DE TU STAND</th>
              <th>COSTO TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableDetails">
              <td colspan="4">
                {AREA_LIST.filter((area) => areaId === area.id).map((item) => (
                  <p key={item.id}>
                    Como es el tamaño de tu stand:{" "}
                    <span className="specifications">{item.size} metros</span>
                  </p>
                ))}
              </td>
              <td></td>
            </tr>
            <tr className="tableDetails">
              <td colspan="4">
                {WALL_LISTS.filter((wall) => wallId === wall.id).map((item) => (
                  <p key={item.id}>
                    Como es la forma de tu stand:{" "}
                    <span className="specifications">{item.name}</span>
                  </p>
                ))}
              </td>
              <td></td>
            </tr>
            <tr className="tableDetails">
              <td colspan="4">
                {FLOOR_OPTIONS.filter((floor) => floorId === floor.id).map(
                  (item) => (
                    <p key={item.id}>
                      El color del piso de tu stand es:{" "}
                      <span className="specifications">{item.name}</span>
                    </p>
                  )
                )}
              </td>
              <td></td>
            </tr>
            <tr>
              <td colspan="5">
                <ul>
                  {AREA_LIST.filter((area) => areaId === area.id).map(
                    (item) => (
                      <li className="priceResume" key={item.id}>
                        <div className="priceResume">{item.Price}</div>
                      </li>
                    )
                  )}
                </ul>
              </td>
            </tr>
            <tr className="tableTittles">
              <td>PRODUCTO</td>
              <td>FOTO</td>
              <td>COSTO UNITARIO</td>
              <td>CANTIDAD</td>
              <td>COSTO TOTAL</td>
            </tr>

            {Object.keys(furnituresResume)
              .filter((xax) => {
                return furnituresResume[xax] >= 1;
              })
              .map((item) => (
                <tr>
                  <td className="furnitureDetail" key={dbFurnitures[item].id}>
                    {dbFurnitures[item].name}
                  </td>
                  <td>
                    {" "}
                    <p className="showFurniture" key={dbFurnitures[item].id}>
                      <div className="showImage">
                        <img
                          className="imageResume"
                          src={dbFurnitures[item].image}
                        />
                      </div>
                    </p>
                  </td>
                  <td className="furnitureDetail" key={dbFurnitures[item].id}>
                    ${dbFurnitures[item].price}USD
                  </td>
                  <td className="furnitureDetail" key={dbFurnitures[item].id}>
                    <div className="addQuantitySection">
                      <button
                        className="buttonQuantityRest"
                        onClick={() =>
                          restProductQuantity(dbFurnitures[item].id)
                        }
                      >
                        -
                      </button>
                      <div className="quantityResume">
                        {furnituresResume[item]}
                      </div>
                      <button
                        className="buttonQuantityAdd"
                        onClick={() =>
                          addProductQuantity(dbFurnitures[item].id)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td
                    className="priceResumeFurniture"
                    key={dbFurnitures[item].id}
                  >
                    $ {dbFurnitures[item].price * (furnituresResume[item] || 0)}{" "}
                    USD
                  </td>
                </tr>
              ))}

            <tr className="tableTittlesTotal">
              <td colspan="5">
                VALOR TOTAL ${" "}
                {Object.keys(furnituresResume).reduce((prevTotal, item) => {
                  return (
                    prevTotal +
                    dbFurnitures[item].price * furnituresResume[item]
                  );
                }, sumArea)}{" "}
                USD
              </td>
            </tr>
          </tbody>
        </Table>
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
  addProductQuantity(productId) {
    dispatch({
      type: ADD_PRODUCT_QUANTITY,
      productId,
    });
  },
  restProductQuantity(productId) {
    dispatch({
      type: REST_PRODUCT_QUANTITY,
      productId,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
