import React, { Component } from "react";
import { connect } from "react-redux";
import SideNavHeader from "./SideNavHeader";
import NewItemButton from "./NewItemButton";
import ItemList from "./ItemList";
import { setParentAndChildNodesService } from "../../services.js"
import axios from "axios";
import "../../styles/SideNav.css";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFiles: true
    };
  }

  _toggleHeader = () => {
    this.setState(prevState => {
      return { displayFiles: !prevState.displayFiles };
    });
  };

  render() {
    return (
      <div className="sideNav">
        <SideNavHeader
          displayFiles={this.state.displayFiles}
          _toggleHeader={this._toggleHeader}
        />
        <NewItemButton _toggleUpload={this.props._toggleUpload} />
        <ItemList
          setParentAndChildNodes={this.props.setParentAndChildNodes}
          data={this.state.displayFiles ? this.props.caseFiles : this.props.caseTags}
          activeCase={this.props.activeCase}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    caseFiles: state.caseFiles,
    caseTags: state.caseTags,
    activeCase: state.activeCase
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setParentAndChildNodes: (case_id, id, type) => dispatch(setParentAndChildNodesService(case_id, id, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
