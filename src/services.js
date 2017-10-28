import axios from "axios";
import {
  getAllCases,
  refreshFileList,
  openCase,
  setRoute,
  sideDisplay
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

export function setRouteService(case_id, id, type) {
  return dispatch => {
    if (type === "tag") {
      axios.get("/" + case_id + "/files/tags/" + id).then(res => {
        console.log("tags", res.data);
        const tags = res.data;
        const payload = { tags };
        dispatch(setRoute(payload));
      });
    } else if (type === "file") {
      axios.get("/case/" + case_id + "/" + id).then(res => {
        console.log("files", res);
        const parent = res.data;
        const child = res.data.tags;
        const payload = { parent, child };
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
