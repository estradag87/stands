import React from "react";
import "./Furniture.scss";
import { Row, Col } from "react-bootstrap";
import { ADD_PRODUCT_QUANTITY } from "../../constants";
import { REST_PRODUCT_QUANTITY } from "../../constants";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { firebaseApp } from "../../base";

const Furniture = ({
  FURNITURES,
  selectedCategories,
  dbFurnitures,
  addProductQuantity,
  furnituresResume,
  restProductQuantity,
  areaId,
  wallId,
  floorId,
}) => {
  const history = useHistory();
  toast.configure();

  const goToChart = () => {
    if (areaId === "") {
      toast.warning("Selecciona un area para tu stand", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (wallId === "") {
      toast.warning("Selecciona un tipo stand", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (floorId === "") {
      toast.warning("Selecciona un tipo de piso", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (Object.keys(furnituresResume).length === 0) {
      toast.warning("Selecciona nuestros productos del mobiliario", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (
      areaId !== "" &&
      wallId !== "" &&
      floorId !== "" &&
      Object.keys(furnituresResume).length > 0
    ) {
      history.push(`/resume`);
    }
    return;
  };

  const params = useParams();
  const infoToBase = () => {
    firebaseApp.database().ref(params.nombreDeLaEmpresa).set({
      Area: areaId,
      Walls: wallId,
      Floor: floorId,
      FurnituresSelected: furnituresResume,
    });
  };

  return (
    <div clasName="section4">
      <div className="showFurnitureList">
        <Row className="justify-content-lg-center">
          {Object.keys(dbFurnitures)
            .filter((furniture) => {
              return (
                selectedCategories &&
                selectedCategories.includes(dbFurnitures[furniture].category)
              );
            })
            .map((item) => (
              <Col lg={4} md={4} sm={12} xs={12}>
                <li className="showFurniture" key={dbFurnitures[item].id}>
                  <div className="showImage">
                    <img
                      className="imageFurniture"
                      src={dbFurnitures[item].image}
                    />
                  </div>
                  <div className="nameFurniture">{dbFurnitures[item].name}</div>
                  <div className="priceFurniture">
                    ${dbFurnitures[item].price} USD
                  </div>
                  <div className="addQuantitySection">
                    <button
                      className="buttonQuantityRest"
                      onClick={() => restProductQuantity(dbFurnitures[item].id)}
                    >
                      -
                    </button>
                    <div className="quantity">{furnituresResume[item]}</div>
                    <button
                      className="buttonQuantityAdd"
                      onClick={() => addProductQuantity(dbFurnitures[item].id)}
                    >
                      +
                    </button>
                  </div>
                </li>
              </Col>
            ))}
        </Row>
      </div>
      <button
        onClick={() => {
          goToChart();
          infoToBase();
        }}
      >
        COTIZAR
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dbFurnitures: state.dbFurnitures,
  selectedCategories: state.selectedCategories,
  FURNITURES: state.FURNITURES,
  furnituresResume: state.furnituresResume,
  areaId: state.areaId,
  wallId: state.wallId,
  floorId: state.floorId,
});

const mapDispatchToProps = (dispatch) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Furniture);
