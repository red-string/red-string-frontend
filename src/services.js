import axios from "axios";
import {
  getAllCases,
  refreshFileList,
  openCase,
  setRoute,
  sideDisplay,
  setFileFocus
} from "./store/actions";

export function getAllCasesService() {
  return dispatch => {
    axios.get("/case").then(res => {
      dispatch(getAllCases(res.data));
    });
  };
}

export function openCaseService(caseId) {
  return dispatch => {
    axios.get("/case/" + caseId.toString()).then(res => {
      const files = res.data;
      axios.get("/" + caseId.toString() + "/files/tags").then(resp => {
        const tags = resp.data;
        const payload = {
          active: caseId,
          tags,
          files
        };
        dispatch(openCase(payload));
      });
    });
  };
}

export function refreshFileListService(caseId) {
  return dispatch => {
    axios.get("/case/" + caseId.toString()).then(res => {
      const files = res.data;
      axios.get("/" + caseId.toString() + "/files/tags").then(resp => {
        const tags = resp.data;
        const payload = { tags, files };
        dispatch(refreshFileList(payload));
      });
    });
  };
}

export function setRouteService(case_id, id, type, filterArray) {
  return dispatch => {
    if (type === "tag") {
      axios.get("/" + case_id + "/files/tags/" + id).then(res => {
        const parent = res.data;
        if (filterArray) {
          const filteredParent = keepParent(filterArray, parent);
          if (!filteredParent) return false;
          const newChildren = keptChildren(
            filterArray,
            filteredParent.children
          );
          filteredParent.children = newChildren;
          const payload = filteredParent;
          dispatch(setRoute(payload));
        } else {
          dispatch(setRoute(parent));
        }
      });
    } else if (type === "file") {
      axios.get("/case/" + case_id + "/" + id).then(res => {
        const parent = res.data;
        if (filterArray) {
          const filteredParent = keepParent(filterArray, parent);
          if (!filteredParent) return false;
          const newChildren = keptChildren(
            filterArray,
            filteredParent.children
          );
          filteredParent.children = newChildren;
          const payload = filteredParent;
          dispatch(setRoute(payload));
        } else {
          dispatch(setRoute(parent));
        }
      });
    }
  };
}

export function sideDisplayService(display) {
  return dispatch => {
    dispatch(sideDisplay(display));
  };
}

export function setFileFocusService(file_id) {
  return dispatch => {
    axios.get("/file/" + file_id).then(res => {
      let file = res.data[0];
      dispatch(setFileFocus(file));
    });
  };
}

function keepParent(d3Array, object) {
  const result = d3Array.filter(d3 => d3 === object.d3);
  if (result.length) return false;
  return object;
}

function keptChildren(d3Array, childrenArray) {
  const newChildren = [];
  childrenArray.forEach(child => {
    let keep = true;
    for (let i = 0; i < d3Array.length; i++) {
      if (d3Array[i] === child.d3) keep = false;
    }
    if (keep) newChildren.push(child);
  });
  return newChildren;
}
