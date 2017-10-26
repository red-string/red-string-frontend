import React, { Component } from "react";
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink
} from "react-vis-force";

export default class StringMap extends Component {
  constructor(props) {
    super(props);
  }
  // file_d3
  // tags: [{ tag, d3 }]
  // file_name
  // file_description

  // createFileNodes = (props) => {
  //     return props.files.map((file)=> {
  //         return <ForceGraphNode showLabel key={file.file_d3} node={{ id: file.file_d3, data: file.file_name }} fill="lightgrey" stroke="black" r="35" />
  //     })
  // }

  // createTagNodes = (props) => {
  //     return props.tags.map((tag)=>{
  //         return <ForceGraphNode showLabel key={tag.file_d3} node={{ id: tag.tag_d3, data: tag.tag }} fill="white" stroke="black" r="25" />
  //     })
  // }

  // createLinks = (props) => {
  //     console.log(props);
  //     return props.tags.map((tag)=>{
  //         return (
  //             <ForceGraphLink key={tag.file_id + tag.tag_d3} link={{ source: "f" + tag.file_id, target: tag.tag_d3 }} stroke="red"/>
  //     )})
  // }

  createNodesFromFile = file => {
    console.log("NODE NODIN");
    return (
      <ForceGraphNode
        showLabel
        key={file.file_d3}
        node={{ id: file.file_d3, data: file.file_name }}
        fill="lightgrey"
        stroke="black"
        r="35"
      />
    );
  };

  createNodesFromFileTags = tags => {
    return tags.map(tag => {
      console.log("TAGS MAPPIN", tag);
      return (
        <ForceGraphNode
          showLabel
          key={tag.tag_d3}
          node={{ id: tag.tag_d3, data: tag.tag }}
          fill="lightgrey"
          stroke="black"
          r="35"
        />
      );
    });
  };

  createLinksFromFileTags = tags => {
    return tags.map(tag => {
      console.log("LINKS LINKIN", tag);
      return (
        <ForceGraphLink
          key={tag.tag_d3}
          link={{ source: tag.file_d3, target: tag.tag_d3 }}
          stroke="red"
        />
      );
    });
  };

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    console.log("HELLO", this.props);
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
        }}
      >
        {this.createNodesFromFile(this.props.files)}
        {this.createNodesFromFileTags(this.props.tags)}
        {this.createLinksFromFileTags(this.props.tags)}
      </InteractiveForceGraph>
    );
  }
}
