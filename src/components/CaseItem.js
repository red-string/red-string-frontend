import React from "react";

const CaseItem = (props) => {

  return (
    <li className="CaseItem">
      <button onClick={props._openCase} id={props.id}>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </button>
    </li>
  );
}

export default CaseItem