import React from "react";

const CaseItem = (props) => {

  return (
    <li className="CaseItem">
      <button
        onClick={ (evt) => props._openCase(evt, props.id) }
        id={props.id}>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </button>
    </li>
  );
}

export default CaseItem