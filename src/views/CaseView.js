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
  constructor(){
    super()
    this.state = {
      cases: [],
      activeCase: ""
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

  _openCase = (evt, case_id) => {
    console.log(case_id);
    getAllFilesFromCase(case_id).then(files => {
      this.setState({
        activeCase: case_id,
        caseFiles: files
      })
    })
  }

  render() {
    return (
      <div className="CaseView">
        {
          this.state.cases 
          ? <CaseList cases={this.state.cases} _openCase={this._openCase} />
          : <NewCaseForm />
        }
        
        
      </div>
    );
  }
}
