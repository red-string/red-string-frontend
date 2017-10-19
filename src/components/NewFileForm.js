import React, {Component} from "react";
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
  }
}

handleChange = (evt) => {
  let inputName = evt.target.name;
  this.setState({
    [inputName] : evt.target.value
  })
}

setFileState = (files) => {
  let file = files[0]
  this.setState({
    file: file,
    file_name: file.name,
    file_dateModified: file.lastModifiedDate
  })
  this.readFiles(file);
  console.log('woo')
}

// reader.onload = function(event) {
//     var contents = event.target.result;
//     console.log("File contents: " + contents);
// };
//
// reader.onerror = function(event) {
//     console.error("File could not be read! Code " + event.target.error.code);
// };
//
// reader.readAsText(file);

readFiles = (file) => {
  axios.post('/case/file/new', file)
  // const reader = new FileReader();
  // reader.onload = function(e) {
  //   let text = reader.result;
  //   axios.post('/case/files/new', text)
  // }
  // reader.readAsText(file)
  //handle axios request in submit event handler?

}





  render() {
    console.log('woo', this.state)
    let instruction = this.state.file_name ? 'You have selected this file for upload: ' + this.state.file_name : 'Select a file for upload';
    return (
      <div className="newFile">
        {/* <input type="file" name="file" onchange="handleFiles(this.files)"/> */}
        <p>{instruction}</p>
        {/* <form action="/cases/files/new" method="POST"> */}
        <ReactFileReader
          handleFiles={this.setFileState} fileTypes='.docx'>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        <input type="text" name="file_desc" placeholder="Add description" onChange={this.handleChange} value={this.state.value}/>
      {/* </form> */}
      </div>
    );
  }
}

export default NewFileForm;
