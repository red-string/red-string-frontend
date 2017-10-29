import React, { Component } from "react";
import { connect } from "react-redux";
import StringMap from "../components/StringMap";
import "../styles/FileView.css";
import "../styles/stringMap.css";
import { sideDisplayService } from "../services";

class DataVisView extends Component {
  componentDidMount() {
    this.props.sideNav("Graph");
  }

  render() {
    return (
      <div className="ViewCont">
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
    sideNav: display => dispatch(sideDisplayService(display))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataVisView);
