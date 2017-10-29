import React from "react";
import "../../styles/SideNav.css"

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