import React from "react";
import CaseItem from "./CaseItem";
import {
  getAllCases,
  getAllFilesFromCase,
  getAllTagsFromFile
} from "../services.js";
import "../styles/CaseView.css"


const CaseList = (props)=>{
  console.log("CL" , this.props);
    
    return (
      <div className="CaseList">
        <ul>
          {props.cases.map(singleCase => {
            return <CaseItem
                      key={singleCase.case_id}
                      id={singleCase.case_id}
                      name={singleCase.case_name}
                      desc={singleCase.case_description}
                      _openCase={props._openCase}
                    />;
          })}
        </ul>
        <button onClick={props._toggleForm}>New Case</button>
      </div>
    );
  }

  export default CaseList