import React, { Component } from "react";
import { connect } from "react-redux";
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink
} from "react-vis-force";
import { setRouteService, sideDisplayService } from "../services";

class StringMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: this.props.route,
      didMount: false
    };
  }

  componentDidMount() {
    this.props.sideNav("graph");
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   route: nextProps.route
    // });
  }

  routeNodeCreator = () => {
    if (this.state.route) {
      const route = this.state.route;
      console.log("This is route", route);
      return route.map(node => {
        return (
          <ForceGraphNode
            showLabel
            key={node.d3}
            node={{ id: node.d3, data: node.name }}
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

  childNodeCreator = () => {
    if (this.state.route.length) {
      const currentIndex = this.props.route.length - 1;
      const currentNode = this.props.route[currentIndex];
      let type;
      return currentNode.children.map(child => {
        if (child.d3[0] === "t") {
          type = "tag";
        } else {
          type = "file";
        }
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
    if (this.state.route.length > 1) {
      return this.state.route.map((item, ind) => {
        let oldInd = ind - 1;
        let prev = this.state.route[oldInd];
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
    if (this.state.route.length) {
      let currentIndex = this.state.route.length - 1;
      let currentNode = this.state.route[currentIndex];
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
          width: 900,
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

const mapDispatchToProps = dispatch => {
  return {
    sideNav: display => dispatch(sideDisplayService(display))
  };
};

function mapStateToProps(state) {
  return {
    activeCase: state.activeCase,
    route: state.route
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StringMap);
