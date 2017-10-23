import React, { Component } from "react";

const SideNavHeader = (props) => {
    return (
        <button className="navHeader" onClick={props._toggleHeader} >{props.text}</button>
    )
}

export default SideNavHeader