import React, {Component} from "react";
import "../styles/NewFileForm.css";
import ReactFileReader from "react-file-reader";
import {Link} from 'react-router-dom';
import axios from "axios";


class NewFileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileOpen: false,
      textOpen: false,
      file_name: "",
      file: "",
      file_desc: "",
      file_type: "",
      file_dateModified: "",
      case_id: "",
      file_text: ""
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
    let file_text = this.state.file_text
    this.sendFile(file, name, description, dateModified, case_id, file_type, file_text);
  };

  setFileState = files => {

    let file = files[0];
    let name = file.name;
    let file_dateModified = file.lastModifiedDate;
    this.setState({file: file, file_name: name, file_dateModified: file_dateModified, case_id: this.props.activeCase});
  };

  sendFile = (file, name, description, dateModified, case_id, file_type, file_text) => {
    let data = new FormData();
    data.append("file", file);
    data.append("name", name);
    data.append("description", description);
    data.append("dateModified", dateModified);
    data.append("case_id", case_id);
    data.append("file_type", file_type);
    data.append("file_type", file_type);
    data.append("file_text", file_text);


    axios.post("/case/" + case_id + "/new", data).then(response => {

      this.props.refreshFileList()
    });
  }

  toggleVisible = (evt) => {
    evt.preventDefault();
    let evtName = evt.target.name;
    this.setState({
      [evtName]: true
    })
}
  // setClass = () => {
  //   let inputClassName = "";
  //   console.log()
  //   if (this.state.user_input === "textOpen") {
  //     return inputClassName = {display: 'block'}
  //   }
  //   else if (this.state.user_input === "fileOpen") {
  //     return hey = "show me the file upload!"
  //   }
  //   else return;
  // }

    // const reader = new FileReader();
    // reader.onload = function(e) {
    //   let text = reader.result;
    //   axios.post('/case/files/new', text)
    // }
    // reader.readAsText(file)
    //handle axios request in submit event handler?

    render() {
      console.log("selected input: ", this.state.user_input)
      let instruction = this.state.file_name
        ? "You have selected this file for upload: " + this.state.file_name
        : "Select a file for upload";
      const hiding = {
        display: 'none'
      }
      const shown = {
        display: 'block'
      }


      return (
        <div className="newFile">
          <form>
            <button onClick={this.toggleVisible} name="textOpen">Manually enter text</button>
            <button onClick={this.toggleVisible} name="fileOpen">Upload a file</button>
            <div className="fileOpen" style={this.state.fileOpen ? shown : hiding}>
              <p>{instruction}</p>
              <ReactFileReader handleFiles={this.setFileState} fileTypes=".docx, .pdf">
                <p>Upload</p>
              </ReactFileReader>

              <select name="file_type" onChange={this.handleChange} required>
                <option>Select a filetype...</option>
                <option value="docx">Word Document (.docx)</option>
                <option value="pdf">PDF</option>
              </select>
            </div>
            <div className="textOpen" style={this.state.textOpen ? shown : hiding}>
              <textarea name="input" cols="30" rows="10" placeholder="Enter your text here..." onChange={this._handleChange} value={this.state.file_text} />
            </div>
            <input type="text" name="file_name" placeholder="Add file name" onChange={this.handleChange} value={this.state.file_name}/>
            <input type="text" name="file_desc" placeholder="Add description" onChange={this.handleChange} value={this.state.file_desc}/>

            <button onClick={this.handleSubmit}>Submit</button>
          </form>
          : "Please go back and pick a case"
        }
        </div>
    );
  } 
}

  export default NewFileForm;
