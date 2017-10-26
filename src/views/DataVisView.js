import React, { Component } from "react";
import StringMap from "../components/StringMap"
import SideNav from "../components/NavBar/SideNav"
import "../styles/FileView.css"
import "../styles/stringMap.css"
import {
  getTagsThatShareFiles
} from "../services.js";

export default class DataVisView extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		console.log(this.props);
		console.log(this.state);
		//getTagsThatShareFiles( )
	}

  render() {
    return (
		<div className="ViewCont">
			{/* <StringMap pNode={this.props.pNode} cNode={this.props.cNode} /> */}
		</div>
	)
  }
}

