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
  
  

  render() {
    return (
      <div className="App">
        <SideNav />
        <Switch>
          <Route exact path="/files" component={FileView} />
          <Route exact path="/tags" component={TagView} />
          <Route exact path="/graph" component={DataVisView} />
          <Route exact path="/cases" component={CaseView} />
        </Switch>
      </div>
    );
  }
}

export default App;
