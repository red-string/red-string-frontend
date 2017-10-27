import React, { Component } from "react";
import "../../styles/SideNav.css"

const SideNavHeader = (props) => {

    return (
        <button className="navHeader" onClick={props._toggleHeader} >
            <div className={props.displayFiles ? "headerUnTransform" :"headerTransform" }>
                <div className="headerEl"><p>FILES</p><div className="arrow-down"></div></div>
                <div className="headerEl"><p>TAGS</p><div className="arrow-up"></div></div>
            </div>
        </button>
    )
}

export default SideNavHeader