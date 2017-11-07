import React from "react";
import CaseItem from "./CaseItem";
import "../styles/CaseView.css"


const CaseList = (props)=>{
    
    return (
      <div className="CaseList">
        <button onClick={props._toggleForm} className="newCaseBtn">New Case</button>
        <ul>
          {props.cases.map(singleCase => {
            return <CaseItem
                      key={singleCase.id}
                      id={singleCase.id}
                      name={singleCase.case_name}
                      desc={singleCase.case_description}
                      _openCase={props._openCase}
                    />;
          })}
        </ul>
        
      </div>
    );
  }

  export default CaseList