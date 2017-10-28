import React, { Component } from "react";
import NewFileForm from '../components/NewFileForm'
import SideNav from '../components/NavBar/SideNav'
import FileDetail from "../components/FileDetail"
import { connect } from "react-redux";
import { setRouteService, sideDisplayService } from "../services.js"
import "../styles/FileView.css"

class FileView extends Component {
  constructor(props){
    super(props);
    this.state= {
      displayFocus: false
    }
  }

  componentDidMount(){
    this.props.sideDisplay("files");
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if( nextProps.focusedFile ){
      this.setState({
        displayFocus: true 
      })
    } else {
      this.setState({
        displayFocus: false
      })
    }
  }

  

  render() {
    return (
      <div className="newFileForm ViewCont">
        {
          this.state.displayFocus
          ? <FileDetail file={this.props.focusedFile} />
          : null
        }
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
    sideDisplayContent: state.sideDisplayContent,
    cases: state.cases,
    focusedFile: state.focusedFile
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setRoute: (case_id, id, type) => dispatch(setRouteService(case_id, id, type)),
    sideDisplay: (display) => dispatch(sideDisplayService(display))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileView);
