import React, { Component } from "react";
import NewFileForm from '../components/NewFileForm'
import SideNav from '../components/NavBar/SideNav'
import "../styles/FileView.css"

export default class FileView extends Component {
  
  componentDidUpdate(){
    console.log(this.props);
  }
  
  render() {
    return (
      <div className="newFileForm ViewCont">
        {
          this.props.upload
          ? <NewFileForm activeCase={this.props.activeCase} />
          : null
        }
      </div>
    )
  }
}
