import React, { Component } from "react";
import SideNav from "../components/NavBar/SideNav";
import NewCaseForm from '../components/NewCaseForm'
import CaseList from "../components/CaseList";
import {
  getAllCases,
  getAllFilesFromCase,
  getAllTagsFromFile
} from "../services.js";

export default class CaseView extends Component {
  constructor(props){
    super(props)
    this.state={
      displayForm: false
    }
  }

  ///////////////////////
  // Helper Functions
  //////////////////////

  _toggleForm = () => {
    this.setState((prevState)=>{
      return { displayForm: !prevState.displayForm }
    })
  }
  

  render() {
    console.log("CV", this.props);
    return (
        <div className="caseDisplay" >
        {
          this.state.displayForm 
          ? <NewCaseForm _toggleForm={this._toggleForm} />
          : <CaseList cases={this.props.appState.cases} _openCase={this.props._openCase} _toggleForm={this._toggleForm} />
        }
        </div>
    );
  }
}
