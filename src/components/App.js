import React, { Component } from "react";
import CaseView from "../views/CaseView";
import DataVisView from "../views/DataVisView";
import TagView from "../views/TagView";
import FileView from "../views/FileView";
import StringMap from "../components/StringMap";
import SideNav from "../components/NavBar/SideNav"
import { Switch, Route } from "react-router-dom";
import {
  getAllCases,
  getAllFilesFromCase,
  getAllTagsFromFile
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
      caseTags: []
    }
  }

  componentWillMount(){
    console.log("trying");
    getAllCases().then(cases => {
      this.setState({
        cases: cases
      })
    })
  }

  ///////////////////////
  // Helper Functions
  //////////////////////

  _openCase = (evt, case_id) => {
    getAllFilesFromCase(case_id).then(files => {
      this.setState({
        activeCase: case_id,
        caseFiles: files
      })
    })
  }
  _chooseFile = (file_id) => {
    this.setState({
      activeFile: file_id
    })
  }

  render() {

    return (
      <div className="App">
        <SideNav
        _chooseFile={this._chooseFile}
        case={this.state.activeCase}
        files={this.state.caseFiles}
        tags="chyeah" />
        <Switch>
          <Route exact path="/case" component={FileView} />
          <Route exact path="/tags" component={TagView} />
          <Route exact path="/graph" component={DataVisView} />
          <Route exact path="/" component={() => <CaseView _openCase={this._openCase} appState={this.state} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
