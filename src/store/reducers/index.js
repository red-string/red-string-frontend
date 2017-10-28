import { combineReducers } from "redux";
import {
  GET_ALL_CASES,
  OPEN_CASE,
  REFRESH_FILE_LIST,
  SET_PARENT_AND_CHILD_NODES,
  SET_ROUTE,
  CLEAR_ROUTE
} from "../constants.js";
import update from "immutability-helper";

const initialState = {
  cases: [],
  activeCase: "",
  activeFile: "",
  caseFiles: [],
  caseTags: [],
  route: []
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
      console.log("Action.payload", action.payload);
      return update(state, {
        route: { $push: [action.payload.parent] }
      });

    case CLEAR_ROUTE:
      return update(state, {
        route: { $set: [] }
      });

    default:
      return state;

    // case OPEN_CASE:
    //   return getAllFilesFromCase(action.payload).then(files => {
    //     getAllTagsFromCase(action.payload).then(tags => {
    //       return Object.assign({}, state, {
    //         activeCase: action.payload,
    //         caseFiles: files,
    //         caseTags: tags,
    //         displayUpload: false
    //       });
    //     });
    //   });
    //   break;

    // case REFRESH_FILE_LIST:
    //   return getAllFilesFromCase(state.activeCase).then(files => {
    //     getAllTagsFromCase(state.activeCase).then(tags => {
    //       return Object.assign({}, state, {
    //         caseFiles: files,
    //         caseTags: tags
    //       });
    //     });
    //   });

    // case SET_PARENT_AND_CHILD_NODES:
    //   return getTagsThatShareFiles(
    //     action.payload,
    //     action.payload
    //   ).then(file => {
    //     return Object.assign({}, state, {
    //       parentNode: file,
    //       childNodes: file.tags
    //       //MAKE THIS APPLY PREVIOUS NODES
    //     });
    //   });
    //   break;

    ///////////////////THESE ARENT NEEDED FOR THE MOMENT/////////////////
    //     case CREATE_GRAPH:
    //         return Object.assign({}, state, {
    //             cases: action.payload
    //         })
    //     break;

    //     case UPDATE_GRAPH:
    //     return Object.assign({}, state, {
    //         cases: action.payload
    //     })
    // break;
  }
};

export default reducers;
