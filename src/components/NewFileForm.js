import React, {Component} from "react";
import ReactFileReader from "react-file-reader";

class NewFileForm extends Component {
  constructor(props) {
    super(props);

  this.state = {
    file_name: "",
    file: "",
    file_desc: ""
  }
}

handleFiles = (files) => {
  console.log(files)
  console.log(files[0])
  console.log(files[0].name, files[0].lastModifiedDate)
}


  render() {
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
