import {GET_ALL_CASES, OPEN_CASE, REFRESH_FILE_LIST, CREATE_GRAPH, UPDATE_GRAPH} from '../constants';

const makeActionCreator = function (actionType) {
  return function (payload) {
    return {
      type: actionType,
      payload: payload
    }
  }
}

export const getAllCases = makeActionCreator(GET_ALL_CASES);
export const openCase = makeActionCreator(OPEN_CASE);
export const refreshFileList = makeActionCreator(REFRESH_FILE_LIST);
export const createGraph = makeActionCreator(CREATE_GRAPH);
export const updateGraph = makeActionCreator(UPDATE_GRAPH);
