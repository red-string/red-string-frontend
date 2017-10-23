import React, { Component } from "react";
import NewFileForm from '../components/NewFileForm'
import SideNav from '../components/NavBar/SideNav'
import "../styles/FileView.css"

export default class FileView extends Component {
  render() {
    return (
      <div className="newFileForm ViewCont">
        <NewFileForm />
      </div>
    )
  }
}
