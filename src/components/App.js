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
      displayUpload: false
    }
  }

  componentWillMount(){
    //GET CASES DISPATCH
  }

  
  ///////////////////////
  // Helper Functions
  //////////////////////

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
