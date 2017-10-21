import axios from "axios";

export function getAllCases(){
  return axios.get("/case").then((res)=>{
     return res.data
  })
}

export function getAllFilesFromCase(caseId){
  axios.get("/case/files").then( res => {
    return res.data
  })
}

export function getAllTagsFromFile(fileId){
  axios.get("/file/tags").then( res => {
    
  })
}

export function getCaseById(caseId){
  axios.get("/case/" + caseId.toString()).then( res => {
    
  })
}

export function getFileById(fileId){
  axios.get("/file/" + fileId.toString()).then( res => {
    
  })
}

export function getTagById(tagId){
  axios.get("/tag/" + tagId.toString()).then( res => {
    
  })
}

export function getLastCaseId(){
  axios.get("/case/files").then( res => {
    
  })
}

export function getLastFileId(){
  axios.get("/case/files").then( res => {
    
  })
}

export function getLastTagId(){
  axios.get("/case/files").then( res => {
    
  })
}

export function getFilesThatShareTag(caseId, tagId){
  axios.get("/case/files").then( res => {
    
  })
}

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