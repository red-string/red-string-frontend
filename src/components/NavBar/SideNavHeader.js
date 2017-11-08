import React from "react";
import "../../styles/SideNav.css"

const SideNavHeader = (props) => {

    return (
        <div className="navHeader" >
            <p>{props.header}</p>
            {
                props.header === "Files"
                ? ( <span className="oi addItemIcon" onClick={props._toggleUpload} data-glyph="plus" title="plus" aria-hidden="true">
                    </span>)
                : null
            }
        </div>
    )
}

export default SideNavHeader