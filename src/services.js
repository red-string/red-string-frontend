import axios from "axios";
import {
  getAllCases,
  refreshFileList,
  openCase,
  setParentAndChildNodes,
  setRoute
} from "./store/actions";

export function getAllCasesService() {
  return dispatch => {
    axios.get("/case").then(res => {
      console.log("data", res);
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

export function setParentAndChildNodesService(case_id, ID, type) {
  return dispatch => {
    if (type === "tag") {
      axios.get("/case/" + case_id + "/" + ID).then(res => {
        console.log("tags", res.data);
        const tags = res.data;
        const payload = { tags };
        dispatch(setParentAndChildNodes(payload));
      });
    } else if (type === "file") {
      axios.get("/case/" + case_id + "/" + ID).then(res => {
        console.log("files", res);
        const parent = res.data;
        const child = res.data.tags;
        const payload = { parent, child };
        dispatch(setParentAndChildNodes(payload));
      });
    }
  };
}

export function setRouteService(case_id, id, type) {
  console.log("args", arguments);
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

// function getAllTagsFromCase(caseId) {
//   return axios.get("/" + caseId.toString() + "/files/tags").then(res => {
//     return res.data;
//   });
// }

// function getFileById(fileId) {
//   return axios.get("/file/" + fileId.toString()).then(res => {
//     return res.data;
//   });
// }

// function getTagsThatShareFiles(case_id, file_id) {
//   return axios.get("/case/" + case_id + "/" + file_id).then(res => {
//     return res.data;
//   });
// }

// function getFilesThatShareTag(case_id, tag_id) {
//   return axios.get("/" + case_id + "/files/tags/" + tag_id).then(res => {
//     return res.data;
//   });
// }

// ////////////// BLANKS ///////////////

// function getAllTagsFromFile(fileId) {
//   axios.get("/file/tags").then(res => {});
// }

// function getCaseById(caseId) {
//   axios.get("/case/" + caseId.toString()).then(res => {});
// }

// function getTagById(tagId) {
//   axios.get("/tag/" + tagId.toString()).then(res => {});
// }

// function getLastCaseId() {
//   axios.get("/case/files").then(res => {});
// }

// function getLastFileId() {
//   axios.get("/case/files").then(res => {});
// }

// function getLastTagId() {
//   axios.get("/case/files").then(res => {});
// }

// function getAllCases() {
//     return new Promise((resolve, reject) => {
//       Case.query().then(cases => {
//         resolve(cases);
//       });
//     });
//   }

//   function getAllFilesFromCase(caseId) {
//     return new Promise((resolve, reject) => {
//       File.query()
//         .where("case_id", "=", caseId)
//         .then(files => {
//           resolve(files);
//         });
//     });
//   }

//   function getAllTagsFromFile(fileId) {
//     return new Promise((resolve, reject) => {
//       Tag.query()
//         .where("file_id", "=", filId)
//         .then(tags => {
//           resolve(tags);
//         });
//     });
//   }

//   function getAllTagsFromCase(caseId) {
//     return new Promise((resolve, reject) => {
//       Tag.query()
//         .where("case_id", "=", caseId)
//         .then(tags => {
//           resolve(tags);
//         });
//     });
//   }

//   //===================================== Get Last CaseId, FileId, TagId

//   function getLastCaseId() {
//     return new Promise((resolve, reject) => {
//       Case.query()
//         .select("case_id")
//         .orderBy("case_id", "desc")
//         .limit(1)
//         .then(resposne => {
//           resolve(respone);
//         });
//     });
//   }

//   function getLastFileId() {
//     return new Promise((resolve, reject) => {
//       File.query()
//         .select("case_id")
//         .orderBy("case_id", "desc")
//         .limit(1)
//         .then(resposne => {
//           resolve(respone);
//         });
//     });
//   }

//   function getLastTagId() {
//     return new Promise((resolve, reject) => {
//       Tag.query()
//         .select("case_id")
//         .orderBy("case_id", "desc")
//         .limit(1)
//         .then(resposne => {
//           resolve(respone);
//         });
//     });
//   }

//   //============================================ Get Individual

//   function getCaseById(caseId) {
//     return new Promise((resolve, reject) => {
//       Case.query()
//         .where("case_id", "=", caseId)
//         .then(singleCase => {
//           resolve(singleCase);
//         });
//     });
//   }

//   function getFileById(fileId) {
//     return new Promise((resolve, reject) => {
//       File.query()
//         .where("file_id", "=", fileId)
//         .then(file => {
//           resolve(file);
//         });
//     });
//   }

//   function getTagById(tagId) {
//     return new Promise((resolve, reject) => {
//       Tag.query()
//         .where("tag _id", "=", tagId)
//         .then(tag => {
//           resolve(tag);
//         });
//     });
//   }

//   // ============================================ Get Shared
//   // Going to have to mess around with this one once we actually get some data
//   function getFilesThatShareTag(caseId, tag) {
//     return new Promise((resolve, reject) => {
//       Tags.query()
//         .select("Tag.file_id", "File.file_id")
//         .where("tag", "=", "tag")
//         .join("File.file_id", "=", "Tag.file_id")
//         .then(files => {
//           resolve(files);
//         });
//     });
//   }

//   // ============================================= Get Multiple

//   function getMultipleFiles(fileIdArray) {
//     return new Promise((resolve, reject) => {});
//   }
