import React from "react";
import CaseItem from "./CaseItem";

export default function CaseList(props) {
  return (
    <div className="CaseList">
      <ul>
        {/* {props.cases.map(singleCase => {
          return <CaseItem key={singleCase.case_id} />;
        })} */}
      </ul>
    </div>
  );
}
