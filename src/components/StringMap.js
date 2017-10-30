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
    this.setState({
      route: [],
      didMount: false
    });
  }

  componentDidUpdate() {
    if (this.state.didMount === false) {
      this.setState({
        didMount: true
      });
    }
  }

  routeNodeCreator = () => {
    if (this.props.route) {
      const route = this.props.route;
      return route.map(node => {
        return (
          <ForceGraphNode
            showLabel
            key={node.d3 + this.props.route.length * 5}
            node={{ id: node.d3, data: node.name }}
            fill="#D2D5DD"
            stroke="black"
            strokeWidth="1px"
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
        let freqStroke;
        let freqWidth;
        let freqFill;
        console.log(child.freq);
        if (child.freq >= 0 && child.freq < 4) {
          freqStroke = "#BD0A13";
          freqWidth = "0.5px";
          freqFill = "white";
        } else if (child.freq >= 4 && child.freq < 7) {
          freqStroke = "black";
          freqWidth = "1px";
          freqFill = "#D2D5DD";
        } else if (child.freq >= 7 && child.freq <= 10) {
          freqStroke = "red";
          freqWidth = "2px";
          freqFill = "#BD0A13";
        } else if (child.freq > 10) {
          freqStroke = "#BD0A13";
          freqWidth = "2px";
          freqFill = "#BD0A13";
        }
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
            fill={freqFill}
            stroke={freqStroke}
            strokeWidth={freqWidth}
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
        let prev;
        if (this.props.route[ind - 1]) {
          prev = this.props.route[ind - 1];
        } else {
          return <div />;
        }
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
        {this.state.didMount ? (
          <InteractiveForceGraph
            className="stringMap"
            zoom
            labelAttr="data"
            simulationOptions={{
              height: 800,
              width: 900,
              animate: true,
              strength: {
                charge: -5000
              }
            }}
          >
            {this.routeNodeCreator()}
            {this.childNodeCreator()}
            {this.routeLinkCreator()}
            {this.childLinkCreator()}
          </InteractiveForceGraph>
        ) : null}
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
