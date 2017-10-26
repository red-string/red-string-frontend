import React, { Component } from "react";
import SideNavHeader from "./SideNavHeader";
import NewItemButton from "./NewItemButton";
import ItemList from "./ItemList";
import "../../styles/SideNav.css"

export default class SideNav extends Component {
	constructor(props){
		super(props);
		this.state={
			displayFiles: true
		}
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
					displayFiles={this.state.displayFiles}
					_toggleHeader={this._toggleHeader}
					/>
				<NewItemButton _toggleUpload={this.props._toggleUpload} />
				<ItemList
					_setParentAndChildNodes={this.props._setParentAndChildNodes}
					case={this.props.case}
					data={
						this.state.displayFiles
						? this.props.files
						: this.props.tags }
					/>	
			</div>
		);
	}
  }