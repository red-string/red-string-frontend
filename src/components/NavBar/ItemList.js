import React, { Component } from "react";
import { Link } from 'react-router-dom'

const ItemList = (props) => {
    return (
        <ul className="itemList" >
            {props.data.map((item)=>{
                if(item.file_name){
                    return <li><Link to="/graph" key={item.file_id} onClick={() => props._chooseFile(item.file_id)} >{item.file_name}</Link></li>
                } else {
                    return <li><Link to="/graph" key={item.tag_id} /* onClick={() => props._chooseTag(item.tag_id)} */ >{item.tag}</Link></li>
                }
            })}
        </ul>
        
    )
}

export default ItemList