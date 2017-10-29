import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/NewFileForm.css";
import ReactFileReader from "react-file-reader";
import { Link } from "react-router-dom";
import axios from "axios";
import { refreshFileListService } from "../services";

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
    this.setState({ [inputName]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('state on submit ', this.state)
    let file = this.state.file;
    let name = this.state.file_name;
    let description = this.state.file_desc;
    let dateModified = this.state.file_dateModified;
    let case_id = this.props.activeCase;
    let file_type = this.state.file_type;
    let file_text = this.state.file_text;
    this.sendFile(
      file,
      name,
      description,
      dateModified,
      case_id,
      file_type,
      file_text
    );
  };

  setFileState = files => {
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

  sendFile = async (
    file,
    name,
    description,
    dateModified,
    case_id,
    file_type,
    file_text
  ) => {
    let data = new FormData();
    data.append("file", file);
    data.append("name", name);
    data.append("description", description);
    data.append("dateModified", dateModified);
    data.append("case_id", case_id);
    data.append("file_type", file_type);
    data.append("file_text", file_text);
    await axios
      .post("/case/" + case_id + "/new", data)
      .then(response => response);
    this.props.refresh(case_id);
  };

  toggleVisible = evt => {
    evt.preventDefault();
    let evtName = evt.target.name;
    if (evtName === "fileOpen") {
      console.log('file opening');
      this.setState(prevState => {
        return {
          fileOpen: !prevState[this.state.fileOpen],
          textOpen: false
        }
      })

    }
    else if (evtName === "textOpen") {
      console.log('text opening');
      this.setState(prevState => {
        return {
          textOpen: !prevState[this.state.textOpen],
          fileOpen: false
        }
      })
    }
  }



  render() {
    const instruction = this.state.file_name
      ? "You have selected a " + this.state.file_type + " file for upload"
      : "Select a file for upload";

    const uploadType = this.state.file_type ? "." + this.state.file_type : "";
    console.log(uploadType)
    const hiding = {
      display: "none"
    };
    const shown = {
      display: "block"
    };


    return (
      <div className="newFile">
        <form>
          <button onClick={this.toggleVisible} name="textOpen">
            Manually enter text
          </button>
          <button onClick={this.toggleVisible} name="fileOpen">
            Upload a file
          </button>
          <div
            className="fileOpen"
            style={this.state.fileOpen ? shown : hiding}
          >
            <p>{instruction}</p>


            <select name="file_type" onChange={this.handleChange} required>
              <option>Select a file type...</option>
              <option value="docx">Word Document (.docx)</option>
              <option value="pdf">PDF</option>
            </select>
            <ReactFileReader
              handleFiles={this.setFileState}
              fileTypes={uploadType}
            >
              <p>Upload {uploadType}</p>
            </ReactFileReader>
          </div>
          <div
            className="textOpen"
            style={this.state.textOpen ? shown : hiding}
          >
            <textarea
              name="file_text"
              cols="30"
              rows="10"
              placeholder="Enter your text here..."
              onChange={this.handleChange}
              value={this.state.file_text}
            />
          </div>
          <input
            type="text"
            name="file_name"
            placeholder="Add file name"
            onChange={this.handleChange}
            value={this.state.file_name}
          />
          <input
            type="text"
            name="file_desc"
            placeholder="Add description"
            onChange={this.handleChange}
            value={this.state.file_desc}
          />

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refresh: caseId => dispatch(refreshFileListService(caseId))
  };
};

function mapStateToProps(state) {
  return {
    activeCase: state.activeCase
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFileForm);
