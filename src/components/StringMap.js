import React, { Component } from "react";
import { connect } from "react-redux";
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink
} from "react-vis-force";

class StringMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: []
    };
  }

  componentDidMount() {
    console.log("StringMap Props: ", this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      route: nextProps.route
    });
  }

  routeNodeCreator = () => {
    if (this.props.route) {
      let currentIndex = this.props.route.length - 1;
      let currentNode = this.props.route[currentIndex];
      console.log(currentNode);
      return (
        <ForceGraphNode
          showLabel
          key={currentNode.d3}
          node={{ id: currentNode.d3, data: currentNode.name }}
          fill="lightgrey"
          stroke="black"
          r="35"
        />
      );
    } else {
      return <div />;
    }
  };

  childNodeCreator = () => {
    if (this.props.route.length) {
      let currentIndex = this.props.route.length - 1;
      let currentNode = this.props.route[currentIndex];
      console.log(this.props.route);
      return currentNode.children.map(child => {
        return (
          <ForceGraphNode
            showLabel
            key={child.d3}
            node={{ id: child.d3, data: child.name }}
            fill="lightgrey"
            stroke="black"
            r="35"
          />
        );
      });
    } else {
      return <div />;
    }
  };

  routeLinkCreator = () => {
    if (this.props.route.length > 1) {
      return this.props.route.map((item, ind) => {
        console.log("this is item", item);
        let oldInd = ind - 1;
        let prev = this.props.route[oldInd];
        return (
          <ForceGraphLink
            key={item.d3}
            link={{ source: item.d3, target: prev.d3 }}
            stroke="red"
          />
        );
      });
    } else {
      return <div />;
    }
  };

  childLinkCreator = () => {
    if (this.props.route.length) {
      let currentIndex = this.props.route.length - 1;
      let currentNode = this.props.route[currentIndex];
      console.log("Current node", currentNode);
      return currentNode.children.map(child => {
        return (
          <ForceGraphLink
            key={child.d3}
            link={{ source: child.d3, target: currentNode.d3 }}
            stroke="red"
          />
        );
      });
    } else {
      return <div />;
    }
  };

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
    route: state.route
  };
}

export default connect(mapStateToProps)(StringMap);

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
