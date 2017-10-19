import React, { Component } from "react";
import SideNav from "../components/NavBar/SideNav";
import NewCaseForm from "../components/NewCaseForm";
import CaseList from "../components/CaseList";

export default class CaseView extends Component {
  render() {
    return (
      <div className="CaseView">
        <SideNav />
        {/* <CaseList /> */}
        <NewCaseForm />
      </div>
    );
  }
}
