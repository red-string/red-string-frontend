import React, { Component } from "react";
import SideNavHeader from "./SideNavHeader";
import NewItemButton from "./NewItemButton";
import ItemList from "./ItemList";
import axios from "axios";
import "../../styles/SideNav.css"

export default class SideNav extends Component {
	constructor(props){
		super(props);
		this.state={
			displayFiles: true
		}
	}

	componentDidMount(){
		axios.get("/case/:id")
	}

	_toggleHeader = () => {
		this.setState( prevState => {
			return { displayFiles: !prevState.displayFiles }
		})
	}

    render() {
      return (
        <div className="sideNav">
			<SideNavHeader
			text={
				this.state.displayFiles
				? "Files"
				: "Tags"
				}
			_toggleHeader={this._toggleHeader}
			/>
			<NewItemButton />
			<ItemList
			_chooseFile={this.props._chooseFile}
			data={
				this.state.displayFiles
				? this.props.files
				: this.props.tags
				} />
        </div>
      );
    }
  }