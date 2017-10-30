import React, { Component } from "react";
import { connect } from "react-redux";
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink
} from "react-vis-force";
import { sideDisplayService } from "../services";

class StringMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: this.props.route,
      didMount: true
    };
  }

  componentDidMount() {
    this.props.sideNav("Graph");
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   route: nextProps.route
    // });
  }

  routeNodeCreator = () => {
    if (this.props.route) {
      const route = this.props.route;
      return route.map(node => {
        return (
          <ForceGraphNode
            showLabel
            key={node.d3 + this.props.route.length*5}
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
    if (this.props.route.length) {
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
            key={child.d3 + this.props.route.length}
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
        let prev = this.props.route[this.props.route.length - 2];
        return (
          <ForceGraphLink
            key={item.d3 + this.props.route.length}
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
      return currentNode.children.map(child => {
        return (
          <ForceGraphLink
            key={child.d3 + this.props.route.length + child.d3}
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
      <div>
        {
          this.state.didMount
          ?<InteractiveForceGraph
          className="stringMap"
          zoom
          labelAttr="data"
          simulationOptions={{
            height: 800,
            width: 900,
            animate: true,
            strength: {
              charge: -2500
            },
            velocityDecay: .1
          }}
        >
          {this.routeNodeCreator()}
          {this.childNodeCreator()}
          {this.routeLinkCreator()}
          {this.childLinkCreator()}
        </InteractiveForceGraph>
          : null
        }
      </div>
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
