import { createStore } from "redux";
// import { syncHistoryWithStore } from "react-router-redux";
// import { browserHistory } from "react-router";

// import rootReducer from "./reducers/index";
import {
  AREA_LIST,
  CATEGORY_LIST,
  FURNITURES,
  WALL_LISTS,
  FLOOR_OPTIONS,
  CHANGE_CATEGORY,
  CHANGE_FLOOR,
  CHOOSE_AREA,
  CHANGE_WALLS,
  ADD_PRODUCT_QUANTITY,
} from "./constants";

const initialState = {
  furnitures: {},
  //   furnituresResume: {},
  wallId: "",
  floorId: "",
  areaId: "",
  AREA_LIST,
  WALL_LISTS,
  FLOOR_OPTIONS,
  selectedCategories: [],
  CATEGORY_LIST,
  categoryName: "",
  dbFurnitures: FURNITURES,
};

const reducerUserChart = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_AREA:
      return {
        ...state,
        areaId: action.area,
      };

    case CHANGE_WALLS:
      return {
        ...state,
        wallId: action.wall,
      };

    case CHANGE_FLOOR:
      return {
        ...state,
        floorId: action.floor,
      };

    case CHANGE_CATEGORY:
      if (state.selectedCategories.includes(action.categoryName)) {
        return state;
      }

      return {
        ...state,
        selectedCategories: state.selectedCategories.concat(
          action.categoryName
        ),
      };

    case ADD_PRODUCT_QUANTITY:
      // TAREA
      return state;

    default:
      return state;
  }
};

export default createStore(reducerUserChart);
