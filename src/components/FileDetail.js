import React from "react";
import { Link } from "react-router-dom";
import CaseItem from "./CaseItem";
import {
  getAllCases,
  getAllFilesFromCase,
  getAllTagsFromFile
} from "../services.js";
import "../styles/CaseView.css"


const FileDetail = (props)=>{
  const file = props.file
  return (
    <div className="FileDetail">
      <h2 className="focus-heading">{file.file_name}</h2>
      <div className="focus-subheading">
        <p>{file.date_created}</p>
        <p>{file.file_description}</p>
      </div>
      {
        file.file_text
        ?<div>{file.file_text}</div>
        : null
      }
      <Link to="/graph"> GRAPH </Link>
    </div>
  );
}

export default FileDetail

// case_id
// date_created
// date_modified
// file_d3
// file_description
// file_id
// file_name
// file_text
