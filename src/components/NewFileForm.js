import React, { Component } from "react";
import "../styles/FileView.css"
import ReactFileReader from "react-file-reader";
import axios from "axios";

class NewFileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file_name: "",
      file: "",
      file_desc: "",
      file_dateModified: ""
    };
  }

  _setFileState = files => {
    let file = files[0];
    this.setState({
      file: file,
      file_name: file.name,
      file_dateModified: file.lastModifiedDate
    });
    this._readFiles(file);
  };

  _readFiles = file => {
    console.log("yayyyyy", file);
    const reader = new FileReader();
    reader.onload = function(e) {
      let text = reader.result;
      console.log("done reading!");
    };
    reader.readAsText(file);
    axios.post("/case/files/new", file);
  };

  render() {
    console.log("woo", this.state);
    let instruction = this.state.file_name
      ? "You have selected this file for upload: " + this.state.file_name
      : "Select a file for upload";
    return (
      <div className="newFile">
        {/* <input type="file" name="file" onchange="handleFiles(this.files)"/> */}
        <p>{instruction}</p>
        <ReactFileReader handleFiles={this._setFileState} fileTypes=".docx">
          <button className="uploadBtn">Upload</button>
        </ReactFileReader>
      </div>
    );
  }
}

export default NewFileForm;
