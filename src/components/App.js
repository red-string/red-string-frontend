import React, { Component } from "react";
import CaseView from "../views/CaseView";
import DataVisView from "../views/DataVisView";
import TagView from "../views/TagView";
import FileView from "../views/FileView";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="" component={FileView} />
          <Route exact path="" component={TagView} />
          <Route exact path="" component={DataVisView} />
          <Route exact path="/" component={CaseView} />
        </Switch>
      </div>
    );
  }
}

export default App;
