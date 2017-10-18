import React, {Component} from "react";
import ReactFileReader from "react-file-reader";

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

handleFiles = (files) => {
  this.setState({
    file_name: files[0].name,
    file_dateModified: files[0].lastModifiedDate
  })
}


  render() {
    console.log(this.state)
    return (
      <div className="newFile">
        {/* <input type="file" name="file" onchange="handleFiles(this.files)"/> */}
        <ReactFileReader
          handleFiles={this.handleFiles} fileTypes='.docx'>
          <button className='btn'>Upload</button>
        </ReactFileReader>

      </div>
    );
  }
}

export default NewFileForm;
