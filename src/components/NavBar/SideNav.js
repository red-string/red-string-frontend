import React, { Component } from "react";
import { connect } from "react-redux";
import SideNavHeader from "./SideNavHeader";
import NewItemButton from "./NewItemButton";
import ItemList from "./ItemList";
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
          _chooseFile={this.props._chooseFile}
          /* _chooseTag={this.props._chooseTag} */
          data={this.state.displayFiles ? this.props.files : this.props.tags}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
