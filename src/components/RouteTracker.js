import React from "react";


const RouteTracker = (props) => {
    console.log(props);
    return (
        <ul className="routeList" >
            <li className="routeHeader" >Current Route</li>
            { props.handleRouteList }
        </ul>
    )
}

export default RouteTracker