import {
  GET_ALL_CASES,
  OPEN_CASE,
  REFRESH_FILE_LIST,
  CREATE_GRAPH,
  UPDATE_GRAPH,
  SET_ROUTE,
  CLEAR_ROUTE,
  SIDE_DISPLAY,
  SET_FILE_FOCUS
} from "../constants";

const makeActionCreator = function(actionType) {
  return function(payload) {
    return {
      type: actionType,
      payload: payload
    };
  };
};

export const setFileFocus = makeActionCreator(SET_FILE_FOCUS)
export const sideDisplay = makeActionCreator(SIDE_DISPLAY);
export const setRoute = makeActionCreator(SET_ROUTE);
export const getAllCases = makeActionCreator(GET_ALL_CASES);
export const openCase = makeActionCreator(OPEN_CASE);
export const refreshFileList = makeActionCreator(REFRESH_FILE_LIST);
export const createGraph = makeActionCreator(CREATE_GRAPH);
export const updateGraph = makeActionCreator(UPDATE_GRAPH);
export const clearRoute = makeActionCreator(CLEAR_ROUTE);
