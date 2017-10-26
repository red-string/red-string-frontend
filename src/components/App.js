import React, { Component } from "react";
import CaseView from "../views/CaseView";
import DataVisView from "../views/DataVisView";
import TagView from "../views/TagView";
import FileView from "../views/FileView";
import StringMap from "../components/StringMap";
import SideNav from "../components/NavBar/SideNav"
import { Switch, Route, Redirect } from "react-router-dom";
import {
  getAllCases,
  getAllFilesFromCase,
  getAllTagsFromFile,
  getAllTagsFromCase,
  getTagsThatShareFiles,
  getFileById
} from "../services.js";
import "../styles/App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      cases: [],
      activeCase: "",
      activeFile: "",
      caseFiles: [],
      caseTags: [],
      parentNode: {},
      childNodes: [],
      previousParent: {},
      previousChildren: []
    }
  }

  componentWillMount(){
    getAllCases().then(cases => {
      this.setState({
        cases: cases
      })
    })
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  ///////////////////////
  // Helper Functions
  //////////////////////

  getCasesAndSetState = () => {
    getAllCases().then(cases => {
      this.setState({
        cases: cases
      })
    })
  }

  refreshFileList = () => {
    getAllFilesFromCase(this.state.activeCase).then(files => {
      getAllTagsFromCase(this.state.activeCase).then(tags => {
        this.setState({
          caseFiles: files,
          caseTags: tags
        })
      })
    })
  }

  _openCase = (evt, case_id) => {
    getAllFilesFromCase(case_id).then(files => {
      getAllTagsFromCase(case_id).then(tags => {
        this.setState({
          activeCase: case_id,
          caseFiles: files,
          caseTags: tags,
          displayUpload: false
        })
      })
    })
  }

  _setParentAndChildNodes = (case_id, file_id) => {
    getTagsThatShareFiles( case_id, file_id ).then( file => {
      console.log(file);
      this.setState((prevState)=>{
        return {
          parentNode: file,
          childNodes: file.tags,
          previousChildren: prevState.childNodes,
          previousParent: prevState.parentNode
        }
      })
    })
  }

  _toggleUpload = () => {
		this.setState( prevState => {
			return { displayUpload: !prevState.displayUpload }
		})
	}

  render() {
    return (
      <div className="App">
        <SideNav
          _setParentAndChildNodes={this._setParentAndChildNodes}
          case={this.state.activeCase}
          files={this.state.caseFiles}
          tags={this.state.caseTags} 
          _toggleUpload={this._toggleUpload}
        />
        <Switch>
          <Route exact path="/files" component={() => <FileView upload={ this.state.displayUpload } activeCase={this.state.activeCase} refreshFileList={this.refreshFileList} /> } />
          <Route exact path="/tags" component={TagView} />
          <Route exact path="/graph" component={() => <DataVisView pNode={this.state.parentNode} cNode={this.state.childNode} /> } />
          <Route exact path="/" component={() => <CaseView _openCase={this._openCase} appState={this.state} getAndSet={this.getCasesAndSetState} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
