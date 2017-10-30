import {
  GET_ALL_CASES,
  OPEN_CASE,
  REFRESH_FILE_LIST,
  SET_PARENT_AND_CHILD_NODES,
  SET_ROUTE,
  SIDE_DISPLAY,
  CLEAR_ROUTE,
  SET_FILE_FOCUS,
  NAVIGATE_ROUTE
} from "../constants.js";
import update from "immutability-helper";

const initialState = {
  cases: [],
  activeCase: "",
  caseFiles: [],
  caseTags: [],
  route: [],
  filterUsed: [],
  sideDisplayContent: "case",
  focusedFile: null
};

const reducers = function getAllCasesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CASES:
      return update(state, { cases: { $set: action.payload } });

    case OPEN_CASE:
      return update(state, {
        activeCase: { $set: action.payload.active },
        caseFiles: { $set: action.payload.files },
        caseTags: { $set: action.payload.tags },
        displayUpload: { $set: false }
      });

    case REFRESH_FILE_LIST:
      return update(state, {
        caseFiles: { $set: action.payload.files },
        caseTags: { $set: action.payload.tags }
      });

    case SET_ROUTE:
      return update(state, {
        route: { $push: [action.payload] },
        filterUsed: { $push: [action.payload.d3] }
      });

    case SIDE_DISPLAY:
      return update(state, {
        sideDisplayContent: { $set: action.payload }
      });

    case CLEAR_ROUTE:
      return update(state, {
        route: { $set: [] }
      });

    case SET_FILE_FOCUS:
      return update(state, {
        focusedFile: { $set: action.payload }
      });

    case NAVIGATE_ROUTE:
      // let route = state.route;
      // console.log(route);
      // let ind = action.payload;
      // console.log(action.payload);
      // let newRoute = route.splice(ind, (ind-(ind+1)));
      // console.log(newRoute);
      return update(state, {
        route: { $set: state.route.filter((_, i) => i <= action.payload) }
      })

    default:
      return state;
  }
};

export default reducers;
