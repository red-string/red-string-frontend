import React, { Component } from "react";
import { connect } from "react-redux";
import StringMap from "../components/StringMap";
import RouteTracker from "../components/RouteTracker";
import "../styles/FileView.css";
import "../styles/stringMap.css";
import { sideDisplayService, clearRouteService, navigateRouteService } from "../services";

class DataVisView extends Component {
  componentDidMount() {
    this.props.sideNav("Graph");
  }

  _triggerClearRoute() {
    this.props.clearRoute();
  }

<<<<<<< HEAD
  _triggerNavigateRoute(ind){
    this.props.navigateRoute(ind)
  }

  handleRouteList(){
    return this.props.route.map( (item, ind) => {
      console.log(item);
        return (
          <li className="routeItem" onClick={() => this.props.navigateRoute(ind)} >
              {item.name}
          </li>
        )
      })
=======
  handleRouteList() {
    return this.props.route.map(item => {
      console.log(item);
      return <li className="routeItem">{item.name}</li>;
    });
>>>>>>> 2dd2ebaf4b427bba01152c6158977a001771ff3d
  }

  render() {
    return (
      <div className="ViewCont">
        <RouteTracker
          route={this.props.route}
          handleRouteList={this.handleRouteList()}
        />
        <StringMap />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.route
  };
}

const mapDispatchToProps = dispatch => {
  return {
    sideNav: display => dispatch(sideDisplayService(display)),
    clearRoute: display => dispatch(clearRouteService(display)),
    navigateRoute: ind => dispatch(navigateRouteService(ind))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataVisView);
