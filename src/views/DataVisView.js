import React, { Component } from "react";
import { connect } from "react-redux";
import StringMap from "../components/StringMap";
import RouteTracker from "../components/RouteTracker";
import "../styles/FileView.css";
import "../styles/stringMap.css";
import { sideDisplayService, clearRouteService } from "../services";

class DataVisView extends Component {
  componentDidMount() {
    this.props.sideNav("Graph");
  }

  _triggerClearRoute() {
    this.props.clearRoute();
  }

<<<<<<< HEAD
  handleRouteList() {
    return this.props.route.map(item => {
      return <li>{item.name}</li>;
    });
=======
  handleRouteList(){
    return this.props.route.map( item => {
      console.log(item);
        return (
          <li className="routeItem" >
              {item.name}
          </li>
        )
      })
>>>>>>> adf223f0011fbf6a5322310421f56e16a5b383d3
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
    clearRoute: display => dispatch(clearRouteService(display))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataVisView);
