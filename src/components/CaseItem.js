import React from "react";
import { Link } from 'react-router-dom'


const CaseItem = (props) => {
  console.log(props);
  return (
    <li className="CaseItem" onClick={ () => props._openCase( props.id ) } id={props.id}>
      <Link to='/files' case={props.id}>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </Link>
    </li>
  );
}


export default CaseItem