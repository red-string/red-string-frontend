import React, { Component } from "react";

const ItemList = (props) => {
    return (
        <ul className="itemList" >
            {props.data.map((item)=>{
                return <li><a href="#">{item.file_name}</a></li>
            })}
        </ul>
        
    )
}

export default ItemList