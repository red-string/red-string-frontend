import React, { Component } from "react";
import { InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';


export default class StringMap extends Component {

    createFileNodes = (props) => {
        return props.files.map((file)=> {
            return <ForceGraphNode showLabel key={file.file_name + "fkey"} node={{ id: file.file_name, data: file.file_name }} fill="white" stroke="black" r="25" />
        })
    }

    createTagNodes = (props) => {
        return props.tags.map((tag)=>{
            return <ForceGraphNode showLabel key={tag.tag_name + "tkey"} node={{ id: tag.tag_name, data: tag.tag_name }} fill="white" stroke="black" r="25" />
        })
    }

    createLinks = (props) => {
        console.log(props);
        return props.tags.map((tag)=>{
           return tag.file_id.map((id)=>{
                return (
                    <ForceGraphLink link={{ source: "File " + id, target: tag.tag_name }} stroke="red"/>
            )})
        })
    }

    render() {
      return (
        <InteractiveForceGraph 
            className="stringMap"
            zoom
            labelAttr="data"
            simulationOptions={{
                height: 800,
                width: 1000,
                animate: false,
                strength: {
                    charge: -4000
                }
        }}>
            {this.createTagNodes(this.props)}
            {this.createFileNodes(this.props)}
            {this.createLinks(this.props)}
        </InteractiveForceGraph>
      )
    }
  }