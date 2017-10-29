import React, { Component } from "react";
import "../../styles/SideNav.css"
import NewItemButton from "./NewItemButton"

const SideNavHeader = (props) => {

    return (
        <div className="navHeader" >
            <p>{props.header}</p>
            <span
                className="oi addItemIcon"
                onClick={props._toggleUpload}
                data-glyph="plus"
                title="plus"
                aria-hidden="true"
            >
            </span>

        </div>
    )
}

export default SideNavHeader