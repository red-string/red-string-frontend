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
    let file = this.state.file;
    let name = this.state.file_name;
    let description = this.state.file_desc;
    let dateModified = this.state.file_dateModified;
    console.log('yo, submitting ', file, name, description, dateModified)
    this.sendFile()
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

  sendFile = (file, name, description, dateModified) => {
    let data = new FormData();
    data.append("file", file);
    data.append("file_name", name);
    data.append("file_description", description);
    data.append("file_dateModified", dateModified)
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
          <form>
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

            <button onClick={this.handleSubmit}>Submit</button>

          </form>
        </div>
    );
  }
}

export default NewFileForm;
