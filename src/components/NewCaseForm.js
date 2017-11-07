import React, { Component } from "react";
import "../styles/NewCaseForm.css"
import axios from "axios";

export default class NewCaseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            case_name: "",
            case_description: ""
        }
    }

    handleChange = (evt) => {
        let val = evt.target.value;
        this.setState({
            [evt.target.name]: val
        })
    }

    handleSubmit = async () => {
        let newCase = {};
        newCase.case_description = this.state.case_description;
        newCase.case_name = this.state.case_name;

        axios.post("https://guarded-crag-52198.herokuapp.com/case/new", newCase).then(res => {

            this.setState({
                case_name: "",
                case_description: ""
            });
        })
        this.props._toggleForm();
    }

    render(){
        return(
            <div className="newCaseForm">
                <input name="case_name" onChange={this.handleChange}  placeholder="Name Of Case" />
                <input name="case_description" onChange={this.handleChange} placeholder="Brief Description" />
                <button onClick={this.handleSubmit}>Create New Case</button><button onClick={this.props._toggleForm}>Cancel</button>
            </div>
        )
    }
  }
