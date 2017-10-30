import React from "react";
import "../../styles/SideNav.css"
import { Link } from "react-router-dom";

const NavIconBar = (props) => {

    return (
        <div className="navIconBar" >
            <Link to="/">
                <span
                    className="oi addItemIcon"
                    data-glyph="folder"
                    title="folder"
                    aria-hidden="true"
                >
                </span>
            </Link>
            <Link to="/files">
                <span
                    className="oi addItemIcon"
                    data-glyph="file"
                    title="file"
                    aria-hidden="true"
                >
                </span>
            </Link>
            <Link to="/tags">
                <span
                    className="oi addItemIcon"
                    data-glyph="tags"
                    title="tags"
                    aria-hidden="true"
                >
                </span>
            </Link>
        </div>
    )
}

export default NavIconBar