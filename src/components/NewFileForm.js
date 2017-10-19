import React, { Component } from "react";
import "../styles/NewFileForm.css"
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

  handleChange = evt => {
    let inputName = evt.target.name;
    this.setState({
      [inputName]: evt.target.value
    });
  };

  setFileState = files => {
    let file = files[0];
    let name = file.name;
    let file_dateModified = file.lastModifiedDate;
    this.setState({
      file: file,
      file_name: name,
      file_dateModified: file_dateModified
    });
    console.log("woo, I am sending ", file, name);
    this.sendFile(file, name);
  };

  sendFile = (file, name) => {
    let data = new FormData();
    data.append("file", file);
    data.append("name", name);
    console.log("this is the file I am sending", data);
    axios.post("/case/files/new", data).then(response => console.log(response));
  };

  // const reader = new FileReader();
  // reader.onload = function(e) {
  //   let text = reader.result;
  //   axios.post('/case/files/new', text)
  // }
  // reader.readAsText(file)
  //handle axios request in submit event handler?

  render() {
    console.log("woo", this.state);
    let instruction = this.state.file_name
      ? "You have selected this file for upload: " + this.state.file_name
      : "Select a file for upload";
    return (
      <div className="newFile">
        {/* <input type="file" name="file" onchange="handleFiles(this.files)"/> */}
        <p>{instruction}</p>
        <ReactFileReader handleFiles={this.setFileState} fileTypes=".docx">
          Upload
        </ReactFileReader>
        <input
          type="text"
          name="file_desc"
          placeholder="Add description"
          onChange={this.handleChange}
          value={this.state.value}
        />
        {/* </form> */}
      </div>
    );
  }
}

export default NewFileForm;
