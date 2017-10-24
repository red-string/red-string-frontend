import React, { Component } from "react";
import "../../styles/SideNav.css"

const SideNavHeader = (props) => {
    console.log(props);
    return (
        <button className="navHeader" onClick={props._toggleHeader} >
            <div className={props.displayFiles ? "headerUnTransform" :"headerTransform" }>
                <p>FILES</p>
                <p>TAGS</p>
            </div>
        </button>
    )
}

export default SideNavHeader