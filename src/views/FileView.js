import React, { Component } from "react";
import NewFileForm from '../components/NewFileForm'
import SideNav from '../components/NavBar/SideNav'
import { connect } from "react-redux";
import { setRouteService, sideDisplayService } from "../services.js"
import "../styles/FileView.css"

class FileView extends Component {
  
  componentDidMount(){
    this.props.sideDisplay("files");
  }
  
  render() {
    return (
      <div className="newFileForm ViewCont">
        {
          this.props.upload
          ? <NewFileForm activeCase={this.props.activeCase} refreshFileList={this.props.refreshFileList} />
          : null
        }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    caseFiles: state.caseFiles,
    sideDisplay: state.sideDisplay,
    cases: state.cases
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setRoute: (case_id, id, type) => dispatch(setRouteService(case_id, id, type)),
    sideDisplay: (display) => dispatch(sideDisplayService(display))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileView);
