import React, { Component } from "react";
import { connect } from "react-redux";
import SideNavHeader from "./SideNavHeader";
import NavIconBar from "./NavIconBar";
import ItemList from "./ItemList";
import {
  setRouteService,
  sideDisplayService,
  setFileFocusService,
  clearRouteService
} from "../../services.js";
import "../../styles/SideNav.css";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Cases"
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      header: nextProps.sideDisplayContent
    });
  }

  ///////////////////////////////////////
  // helper functions

  _triggerRouteAndFocus = (case_id, id, type) => {
    this.props.clearRoute();
    this.props._toggleDetail();
    this.props.setFileFocus(id);
    this.props.setRoute(case_id, id, type);
  };

  _triggerRoute = (case_id, id, type, array) => {
    this.props.setRoute(case_id, id, type, array);
  };

  _updateGraph = id => {
    this.props.selectChild(id);
  };

  ///////////////////////////////////////
  // This function is for handling what is displaying on the sidebar.
  //It should be passed sideDisplay from this.props.
  // sideDisplay is changed by calling a dispatch with the appropriate string as an argument
  // when the corresponding component mounts. See FileView lifecycle method.

  _handleDisplayContent = display => {
    switch (display) {
      case "Cases":
        return this.props.cases.map(item => {
          return <li key={item.case_id}>{item.case_name}</li>;
        });

      case "Files":
        return this.props.caseFiles.map(item => {
          return (
            <li
              key={item.file_id}
              onClick={() =>
                this._triggerRouteAndFocus(
                  this.props.activeCase,
                  item.file_id,
                  "file"
                )}
            >
              {item.file_name}
            </li>
          );
        });

      case "Tags":
        return this.props.caseTags.map(item => {
          return (
            <li
              key={item.tag_id}
              onClick={() =>
                this._triggerRoute(this.props.activeCase, item.tag_id, "tag")}
            >
              {item.tag}
            </li>
          );
        });

      case "Graph":
        return this.props.route[
          this.props.route.length - 1
        ].children.map(item => {
          if (item.description) {
            return (
              <li
                className="childSelect"
                key={item.id}
                onClick={() =>
                  this._triggerRoute(
                    this.props.activeCase,
                    item.id,
                    "file",
                    this.props.filterArray
                  )}
              >
                {item.name}
              </li>
            );
          } else {
            return (
              <li
                className="childSelect"
                key={item.id}
                onClick={() =>
                  this._triggerRoute(
                    this.props.activeCase,
                    item.id,
                    "tag",
                    this.props.filterArray
                  )}
              >
                {item.name}
              </li>
            );
          }
        });

      default:
        return this.props.cases.map(item => {
          return <li key={item.case_id}>{item.case_name}</li>;
        });
    }
  };

  ///////////////////////////////////////
  // RENDER ME TIMBERS

  render() {
    return (
      <div className="sideNav">
        <NavIconBar />
        <div className="sideNavCont">
          <SideNavHeader
            displayFiles={this.state.displayFiles}
            _toggleUpload={this.props._toggleUpload}
            header={this.state.header}
          />
          <ItemList
            _triggerRoute={this._triggerRoute}
            data={this._handleDisplayContent(this.props.sideDisplayContent)}
            page={this.props.sideDisplay}
            activeCase={this.props.activeCase}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    caseFiles: state.caseFiles,
    caseTags: state.caseTags,
    activeCase: state.activeCase,
    sideDisplayContent: state.sideDisplayContent,
    cases: state.cases,
    route: state.route,
    filterArray: state.filterUsed
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setRoute: (case_id, id, type, filterArray) =>
      dispatch(setRouteService(case_id, id, type, filterArray)),
    sideDisplay: display => dispatch(sideDisplayService(display)),
    setFileFocus: id => dispatch(setFileFocusService(id)),
    clearRoute: () => dispatch(clearRouteService())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
