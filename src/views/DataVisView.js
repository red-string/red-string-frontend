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
        <StringMap files={this.props.parentNode} tags={this.props.childNodes} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    parentNode: state.parentNode,
    childNodes: state.childNodes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    //fetchData: url => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataVisView);
