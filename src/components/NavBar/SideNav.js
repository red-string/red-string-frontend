import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SideNavHeader from "./SideNavHeader";
import NewItemButton from "./NewItemButton";
import ItemList from "./ItemList";
import {
  setRouteService,
  sideDisplayService,
  selectedChildService,
  setFileFocusService
} from "../../services.js";
import axios from "axios";
import "../../styles/SideNav.css";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFiles: true,
      header: "Cases"
    };
  }

  componentDidUpdate() {}

  ///////////////////////////////////////
  // helper functions

  _toggleHeader = () => {
    this.setState(prevState => {
      return { displayFiles: !prevState.displayFiles };
    });
  };

  _triggerRouteAndFocus = (case_id, id, type) => {
    console.log("This is the active case", case_id);
    this.props.setFileFocus(id);
    this.props.setRoute(case_id, id, type);
  };

  _triggerRoute = (case_id, id, type) => {
    this.props.setRoute(case_id, id, type);
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
      case "case":
        return this.props.cases.map(item => {
          return <li key={item.case_id}>{item.case_name}</li>;
        });

      case "files":
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

      case "tags":
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

      case "graph":
      this.setState({
        header: "Graph"
      })
        return this.props.route[
          this.props.route.length - 1
        ].children.map(item => {
          return (
            <li
              className="childSelect"
              key={item.id}
              onClick={() =>
<<<<<<< HEAD
                this._triggerRoute(this.props.activeCase, item.id, "tag")}
=======
                this._triggerRouteAndFocus(
                  this.props.activeCase,
                  item.id,
                  "tag"
                )}
>>>>>>> 44b1c10010305ea8e7277d41e76701946dbdee75
            >
              {item.name}
            </li>
          );
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
        <div className="icon-nav" >
          <i className="fa fa-plus"></i>
        </div>
        <SideNavHeader
          displayFiles={this.state.displayFiles}
          _toggleHeader={this._toggleHeader}
          _toggleUpload={this.props._toggleUpload}
          header={this.state.header}
        />
        <ItemList
          _triggerRoute={this._triggerRoute}
          data={this._handleDisplayContent(this.props.sideDisplayContent)}
          page={this.props.sideDisplay}
          activeCase={this.props.activeCase}
        />
        <Link to="/graph"> GRAPH </Link>
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
    route: state.route
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setRoute: (case_id, id, type) =>
      dispatch(setRouteService(case_id, id, type)),
    sideDisplay: display => dispatch(sideDisplayService(display)),
    setFileFocus: id => dispatch(setFileFocusService(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
