import React, { Component } from "react";
import CaseView from "../views/CaseView";
import DataVisView from "../views/DataVisView";
import TagView from "../views/TagView";
import FileView from "../views/FileView";
import SideNav from "../components/NavBar/SideNav";
import DemoWarning from "./DemoWarning";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayUpload: false,
      displayDetail: true
    };
  }

  componentWillMount() {

  }


  ///////////////////////
  // Helper Functions
  //////////////////////

  _toggleUpload = () => {
    this.setState(prevState => {
      return { 
        displayUpload: !prevState.displayUpload,
        displayDetail: false
      };
    });
  };

  _toggleDetail = () => {
    this.setState(prevState => {
      return {
        displayDetail: !prevState.displayDetail,
        displayUpload: false
      }
    })
  }

  render() {
    return (
      <div className="App">
        <SideNav
          _toggleUpload={this._toggleUpload}
          _toggleDetail={this._toggleDetail}
        />
        <DemoWarning />
        <Switch>
          <Route
            exact
            path="/files"
            component={() => (
              <FileView
                _toggleDetail={this._toggleDetail}
                detail={this.state.displayDetail}
                upload={this.state.displayUpload}
                activeCase={this.state.activeCase}
                refreshFileList={this.refreshFileList}
              />
            )}
          />
          <Route exact path="/tags" component={TagView} />
          <Route
            exact
            path="/graph"
            component={() => (
              <DataVisView />
            )}
          />
          <Route
            exact
            path="/"
            component={() => (
              <CaseView
                _openCase={this._openCase}
                appState={this.state}
                getAndSet={this.getCasesAndSetState}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
