import React, { Component } from "react";
import "../../styles/SideNav.css"

const NewItemButton = (props) => {
    return (
        <button className="addItemBtn" onClick={props._toggleUpload} >Add File</button>
    )
}

export default NewItemButton