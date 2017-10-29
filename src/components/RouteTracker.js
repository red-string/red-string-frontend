import React from "react";


const RouteTracker = (props) => {
    console.log(props);
    return (
        <ul className="routeList" >
            { props.handleRouteList }
        </ul>
    )
}

export default RouteTracker