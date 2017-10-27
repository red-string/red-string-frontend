import React, { Component } from "react";
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink
} from "react-vis-force";

export default class StringMap extends Component {
  constructor(props) {
    super(props);
    this.state={
      route: []
    }
  }
  
  componentDidUpdate() {
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      route: nextProps.route
    })
  }

  routeNodeCreator = () => {
    return this.state.route.map( item => {
      return (
        <ForceGraphNode
          showLabel
          key={item.d3}
          node={{ id: item.d3, data: item.name }}
          fill="lightgrey"
          stroke="black"
          r="35"
        />
      )
    })
  }

  childNodeCreator = () => {
    let currentIndex = this.state.route.length - 1
    let currentNode = this.state.route[currentIndex]
    return currentNode.children.map( child => {
      return (
        <ForceGraphNode
          showLabel
          key={child.d3}
          node={{ id: child.d3, data: child.name }}
          fill="lightgrey"
          stroke="black"
          r="35"
        />
      )
    })
  }

  routeLinkCreator = () => {
    return this.state.route.map( item => {
      return (
        <ForceGraphLink
          key={ item.d3 }
          link={{ source: item.d3, target: item.d3 }}
          stroke="red"
        />
    )})
  }

  childLinkCreator = () => {
    let currentIndex = this.state.route.length - 1
    let currentNode = this.state.route[currentIndex]
    return currentNode.children.map( child => {
      return (
        <ForceGraphLink
        key={ child.d3 }
        link={{ source: child.d3, target: currentNode.d3 }}
        stroke="red"
      />
      )
    })
  }

  render() {
    console.log("HELLO", this.state);
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
        {this.routeNodeCreator()}
        {this.childNodeCreator()}
        {this.routeLinkCreator()}
        {this.childLinkCreator()}
      </InteractiveForceGraph>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.route,
  };
}

// createNodesFromFile = file => {
//   console.log("NODE NODIN");
//   return (
//     <ForceGraphNode
//       showLabel
//       key={file.file_d3}
//       node={{ id: file.file_d3, data: file.file_name }}
//       fill="lightgrey"
//       stroke="black"
//       r="35"
//     />
//   );
// };

// createNodesFromFileTags = tags => {
//   return tags.map(tag => {
//     console.log("TAGS MAPPIN", tag);
//     return (
//       <ForceGraphNode
//         showLabel
//         key={tag.tag_d3}
//         node={{ id: tag.tag_d3, data: tag.tag }}
//         fill="white"
//         stroke="black"
//         r="25"
//       />
//     );
//   });
// };

// createLinksFromFileTags = tags => {
//   return tags.map(tag => {
//     console.log("LINKS LINKIN", tag);
//     return (
//       <ForceGraphLink
//         key={ tag.tag_d3 }
//         link={{ source: tag.file_d3, target: tag.tag_d3 }}
//         stroke="red"
//       />
//     );
//   });
// };
