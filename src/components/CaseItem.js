import React from "react";

export default function CaseItem(props) {
  return (
    <li className="CaseItem">
      <h2>{props.case_name}</h2>
      <p>{props.case_description}</p>
    </li>
  );
}
