import React, { Component } from "react";
import "../styles/NewFileForm.css";
import ReactFileReader from "react-file-reader";
import { Link } from 'react-router-dom';
import axios from "axios";

class NewFileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file_name: "",
      file: "",
      file_desc: "",
      file_dateModified: "",
      case_id: ""
    };
  }

  handleChange = evt => {
    let inputName = evt.target.name;
    this.setState({
      [inputName]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    let file = this.state.file;
    let name = this.state.file_name;
    let description = this.state.file_desc;
    let dateModified = this.state.file_dateModified;
    let case_id = this.state.case_id;
    this.sendFile(file, name, description, dateModified, case_id);
  };

  setFileState = files => {
    console.log(files);
    let file = files[0];
    let name = file.name;
    let file_dateModified = file.lastModifiedDate;
    this.setState({
      file: file,
      file_name: name,
      file_dateModified: file_dateModified,
      case_id: this.props.activeCase
    });
  };

  sendFile = (file, name, description, dateModified, case_id) => {
    let data = new FormData();
    data.append("file", file);
    data.append("name", name);
    data.append("description", description);
    data.append("dateModified", dateModified);
    data.append("case_id", case_id);
    console.log("data object", data);

    axios.post("/case/" + case_id + "/new", data).then(response => { 
      console.log(response);
      this.props.refreshFileList()
    });

  // const reader = new FileReader();
  // reader.onload = function(e) {
  //   let text = reader.result;
  //   axios.post('/case/files/new', text)
  // }
  // reader.readAsText(file)
  //handle axios request in submit event handler?

  render() {
    let instruction = this.state.file_name
      ? "You have selected this file for upload: " + this.state.file_name
      : "Select a file for upload";
    return (
      <div className="newFile">
        { this.props.activeCase ? 
          <form>
              <p>{instruction}</p>
              <ReactFileReader handleFiles={this.setFileState} fileTypes=".docx">
                <p>Upload</p>
              </ReactFileReader>
              <input
                type="text"
                name="file_name"
                placeholder="Add file name"
                onChange={this.handleChange}
                value={this.state.file_name.value}
              />
              <input
                type="text"
                name="file_desc"
                placeholder="Add description"
                onChange={this.handleChange}
                value={this.state.file_desc.value}
              />
              <button onClick={this.handleSubmit}>Submit</button>
            </form>
            : <div>
                <p>Please go back and open a case</p>
                <Link to="/">Go Back</Link>
              </div>
        }
        </div>
    );
  }
}

export default NewFileForm;
