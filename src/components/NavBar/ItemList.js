import React, { Component } from "react";
import { Link } from 'react-router-dom';


const ItemList = (props) => {
    return (
        <ul className="itemList" >
            {props.data}
        </ul>
    )
}

export default ItemList