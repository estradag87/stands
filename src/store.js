import { createStore } from "redux";
// import { syncHistoryWithStore } from "react-router-redux";
// import { browserHistory } from "react-router";

// import rootReducer from "./reducers/index";
import {
  AREA_LIST,
  CATEGORY_LIST,
  //   FURNITURES,
  WALL_LISTS,
  FLOOR_OPTIONS,
} from "./constants/index";

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
  FURNITURES,
};

const reducerUserChart = (state = initialState, action) => {
  console.log(action);
  if (action.type === "CHOOSE_AREA") {
    return {
      ...state,
      areaId: action.area,
    };
  }
  if (action.type === "CHANGE_WALLS") {
    return {
      ...state,
      wallId: action.wall,
    };
  }
  if (action.type === "CHANGE_FLOOR") {
    return {
      ...state,
      floorId: action.floor,
    };
  }
  if (action.type === "CHANGE_CATEGORY") {
    return {
      ...state,
      selectedCategories: state.selectedCategories.concat(action.floor),
    };
  }
  return state;
};

export default createStore(reducerUserChart);
