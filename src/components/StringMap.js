import React, { Component } from "react";
import { InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';


export default class StringMap extends Component {

    createFileNodes = (props) => {
        return props.files.map((file)=> {
            return <ForceGraphNode showLabel key={file.file_d3} node={{ id: file.file_d3, data: file.file_name }} fill="lightgrey" stroke="black" r="35" />
        })
    }

    createTagNodes = (props) => {
        return props.tags.map((tag)=>{
            return <ForceGraphNode showLabel key={tag.file_d3} node={{ id: tag.tag_d3, data: tag.tag }} fill="white" stroke="black" r="25" />
        })
    }

    createLinks = (props) => {
        console.log(props);
        return props.tags.map((tag)=>{
                return (
                    <ForceGraphLink key={tag.file_id + tag.tag_d3} link={{ source: "f" + tag.file_id, target: tag.tag_d3 }} stroke="red"/>
        )})
    }

    render() {
      return (
        <InteractiveForceGraph 
            className="stringMap"
            zoom
            labelAttr="data"
            simulationOptions={{
                height: 800,
                width: 1100,
                animate: true,
                strength: {
                    charge: -2500
                }
        }}>
            {this.createTagNodes(this.props)}
            {this.createFileNodes(this.props)}
            {this.createLinks(this.props)}
        </InteractiveForceGraph>
      )
    }
  }