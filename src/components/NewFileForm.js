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

  handleChange = (evt) => {
    let inputName = evt.target.name;
    this.setState({
      [inputName]: evt.target.value
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('yo, submitting ', this.state)
    // this.sendFile(file, name)
  }

  setFileState = files => {
    let file = files[0];
    let name = file.name;
    let file_dateModified = file.lastModifiedDate;
    this.setState({
      file: file,
      file_name: name,
      file_dateModified: file_dateModified
    });
    console.log("woo, I am setting ", this.state, " in state");
  };

  sendFile = (file, name) => {
    let data = new FormData();
    data.append("file", file);
    data.append("name", name);
    data.append("description", "this is the file description I'm typing to test this")
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
    console.log("updated state", this.state);
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
        <input
          type="text"
          name="file_name"
          placeholder="Add file name"
          onChange={this.handleChange}
          value={this.state.value}
        />
        {/* <form action="/cases/files/new" method="POST"> */}
        <ReactFileReader handleFiles={this.setFileState} fileTypes=".docx">
          <button className="btn">Upload</button>
        </ReactFileReader>

        {/* </form> */}
      </div>
    );
  }
}

export default NewFileForm;
