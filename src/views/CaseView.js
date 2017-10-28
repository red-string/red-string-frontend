import React, { Component } from "react";
import { connect } from "react-redux";
import SideNav from "../components/NavBar/SideNav";
import NewCaseForm from "../components/NewCaseForm";
import CaseList from "../components/CaseList";
import {
  getAllCasesService,
  getAllFilesFromCase,
  getAllTagsFromFile,
  openCaseService
} from "../services.js";

class CaseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      displayForm: false
    };
  }

  componentDidMount() {
    this.props.getCases();
  }

  ///////////////////////
  // Helper Functions
  //////////////////////

  _toggleForm = () => {
    this.setState(prevState => {
      return { displayForm: !prevState.displayForm };
    });
  };

  _openCase = (case_id) => {
    this.props.openCase(case_id);
  }

  render() {
    return (
      <div className="caseDisplay">
        {this.state.displayForm ? (
          <NewCaseForm
            _toggleForm={this._toggleForm}
            getAndSet={this.props.getAndSet}
          />
        ) : (
          <CaseList
            cases={this.props.cases}
            _openCase={this._openCase}
            _toggleForm={this._toggleForm}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cases: state.cases
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getCases: () => dispatch(getAllCasesService()),
    openCase: (case_id) => dispatch(openCaseService(case_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseView);
