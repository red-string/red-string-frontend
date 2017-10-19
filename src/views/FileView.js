import React, { Component } from "react";
import NewFileForm from '../components/NewFileForm'
import NewCaseForm from '../components/NewCaseForm'
import "../styles/FileView.css"

export default class FileView extends Component {
  render() {
    return (
      <div className="newFileForm">
        {<NewFileForm />}
        <NewCaseForm />
      </div>
    )
  }
}
