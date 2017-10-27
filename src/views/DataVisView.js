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
    console.log("DataVis Props: ", this.props);
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
    //fetchData: url => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataVisView);
