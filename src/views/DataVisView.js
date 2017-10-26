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

const mapDispatchToProps = dispatch => {
  // return {
  //   fetchData: url => dispatch(itemsFetchData(url))
  // };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataVisView);
