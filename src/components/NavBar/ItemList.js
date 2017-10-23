import React, { Component } from "react";
import { Link } from 'react-router-dom'

const ItemList = (props) => {
    return (
        <ul className="itemList" >
            {props.data.map((item)=>{
                return <li><Link to="/graph" onClick={() => props._chooseFile(item.file_id)} >{item.file_name}</Link></li>
            })}
        </ul>
        
    )
}

export default ItemList