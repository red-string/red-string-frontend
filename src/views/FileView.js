import React, { Component } from "react";
import NewFileForm from '../components/NewFileForm'
import SideNav from '../components/NavBar/SideNav'
import "../styles/FileView.css"

export default class FileView extends Component {
  
  componentDidMount(){

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
