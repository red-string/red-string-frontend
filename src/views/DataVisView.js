import React, { Component } from "react";
import { connect } from "react-redux";
import StringMap from "../components/StringMap";
import "../styles/FileView.css";
import "../styles/stringMap.css";

class DataVisView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ViewCont">
        <StringMap files={this.props.files} tags={this.props.tags} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  state;
  // return {
  //   isAuthenticated: this.state.isAuthenticated
  // };
}

export default connect(mapStateToProps)(DataVisView);
