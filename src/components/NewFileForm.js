import React, {Component} from "react";
import "../styles/NewFileForm.css";
import ReactFileReader from "react-file-reader";
import {Link} from 'react-router-dom';
import axios from "axios";

class NewFileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file_name: "",
      file: "",
      file_desc: "",
      file_type: "",
      file_dateModified: "",
      case_id: ""
    };
  }

  handleChange = evt => {
    let inputName = evt.target.name;
    this.setState({[inputName]: evt.target.value});
  };

  handleSubmit = evt => {
    evt.preventDefault();
    let file = this.state.file;
    let name = this.state.file_name;
    let description = this.state.file_desc;
    let dateModified = this.state.file_dateModified;
    let case_id = this.state.case_id;
    let file_type = this.state.file_type;
    this.sendFile(file, name, description, dateModified, case_id, file_type);
  };

  setFileState = files => {
    console.log(files);
    let file = files[0];
    let name = file.name;
    let file_dateModified = file.lastModifiedDate;
    this.setState({file: file, file_name: name, file_dateModified: file_dateModified, case_id: this.props.activeCase});
  };

  sendFile = (file, name, description, dateModified, case_id, file_type) => {
    let data = new FormData();
    data.append("file", file);
    data.append("name", name);
    data.append("description", description);
    data.append("dateModified", dateModified);
    data.append("case_id", case_id);
    data.append("name", name);
    data.append("file_type", file_type);
    console.log("data object", data);

    axios.post("/case/" + case_id + "/new", data).then(response => {
      console.log(response);
      this.props.refreshFileList()
    })
  };

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
          <form>
            {/* <input type="file" name="file" onchange="handleFiles(this.files)"/> */}
            <p>{instruction}</p>
            <ReactFileReader handleFiles={this.setFileState} fileTypes=".docx, .pdf">
              <p>Upload</p>
            </ReactFileReader>
            <select name="file_type" onChange={this.handleChange}>
              <option selected>Select a filetype...</option>
              <option value="docx">Word Document (.docx)</option>
              <option value="pdf">PDF</option>
              <option value="input">Manually enter text</option>
            </select>
            <input type="text" name="file_name" placeholder="Add file name" onChange={this.handleChange} value={this.state.file_name}/>
            <input type="text" name="file_desc" placeholder="Add description" onChange={this.handleChange} value={this.state.file_desc}/>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      );
    }
  }

  export default NewFileForm;
