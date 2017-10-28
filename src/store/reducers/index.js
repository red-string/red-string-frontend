import { combineReducers } from "redux";
import {
  GET_ALL_CASES,
  OPEN_CASE,
  REFRESH_FILE_LIST,
  SET_PARENT_AND_CHILD_NODES,
  SET_ROUTE,
  SIDE_DISPLAY
} from "../constants.js";
import update from "immutability-helper";

const initialState = {
  cases: [],
  activeCase: "",
  activeFile: "",
  caseFiles: [],
  caseTags: [],
  route: [],
  sideDisplay: "case"
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

    case SET_PARENT_AND_CHILD_NODES:
      return update(state, {
        parentNode: { $set: action.payload.parent },
        childNodes: { $set: action.payload.child }
      });

    case SET_ROUTE:
      return update(state, {
        route: { $push: [action.payload.parent] }
      });

    case SIDE_DISPLAY:
      return update(state, {
        sideDisplay: { $set: action.payload }
    });

    default:
      return state;
    }
}

export default reducers;
