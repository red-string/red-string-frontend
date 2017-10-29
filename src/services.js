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
        const payload = res.data;
        dispatch(setRoute(payload));
      });
    } else if (type === "file") {
      axios.get("/case/" + case_id + "/" + id).then(res => {
        const parent = res.data;
        const payload = { parent };
        dispatch(setRoute(payload));
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
