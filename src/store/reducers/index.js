import { combineReducers } from 'redux';
import {
    GET_ALL_CASES,
    OPEN_CASE,
    REFRESH_FILE_LIST,
    SET_PARENT_AND_CHILD_NODES
} from "../constants.js";
import {
    getAllCases,
    getAllFilesFromCase,
    getAllTagsFromFile,
    getAllTagsFromCase,
    getTagsThatShareFiles,
    getFileById
  } from "../../services.js";

const initialState = {
  cases: [],
  activeCase: "",
  activeFile: "",
  caseFiles: [],
  caseTags: [],
  parentNode: {},
  childNodes: [],
  previousParent: {},
  previousChildren: []
};

const reducers = function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CASES:
      return getAllCases().then(retrievedCases => {
        return Object.assign({}, state, {
          cases: retrievedCases
        });
      });
      break;

    case OPEN_CASE:
      return getAllFilesFromCase(action.payload).then(files => {
        getAllTagsFromCase(action.payload).then(tags => {
          return Object.assign({}, state, {
            activeCase: action.payload,
            caseFiles: files,
            caseTags: tags,
            displayUpload: false
          });
        });
      });
      break;

    case REFRESH_FILE_LIST:
      return getAllFilesFromCase(state.activeCase).then(files => {
        getAllTagsFromCase(state.activeCase).then(tags => {
          return Object.assign({}, state, {
            caseFiles: files,
            caseTags: tags
          });
        });
      });
      break;

        case SET_PARENT_AND_CHILD_NODES:
            return getTagsThatShareFiles( action.payload, action.payload ).then( file => {
                return Object.assign({}, state, {
                    parentNode: file,
                    childNodes: file.tags
                    //MAKE THIS APPLY PREVIOUS NODES
                })
            })
        break;

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
