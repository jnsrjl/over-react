import React, { Component } from 'react';
import {cyan500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

const style = {
  app: {
    height: '100%',
  },
  paper: {
    width: 300,
    margin: 20,
    padding: 20,
  },
  h1: {
    color: cyan500,
    fontSize: 24,
  }
};

class PaperWithListeners extends Component {
  constructor(props) {
    super(props);
    // Mapping Checkboxes' checked-prop with initial state
    this.state = {
      onMouseDown: false,
      onMouseMove: false,
      onScroll: false,
      verticalScrollAmount: 0,
    };
  }

  render() {
    return (
      <Paper style={ style.paper } id="paper" zDepth={5}>
        <h1 style={ style.h1 }>Listeners on paper</h1>
        <Checkbox
          checked={ this.state.onMouseDown }
          label="Listen clicking"
          onCheck={ this.toggleOnMouseDown }
        />
        <Checkbox
          checked={ this.state.onMouseMove }
          label="Listen mouse movement"
          onCheck={ this.toggleOnMouseMove }
        />
        <Checkbox
          checked={ this.state.onScroll }
          label="Listen mouse scrolling"
          onCheck={ this.toggleOnScroll }
        />
        <ul>
          <li id="onMouseDown">Not listening clicking</li>
          <li id="onMouseMove">Not listening movement</li>
          <li id="onScroll">Not listening scrolling</li>
        </ul>
      </Paper>
    );
  }

  toggleOnMouseDown = () => {
    if (this.state.onMouseDown) {
      // Unregister listener
      document.getElementById("paper").removeEventListener('mousedown', this.onMouseDown, false);

      // Update text
      document.getElementById("onMouseDown").innerHTML = "Not listening clicking";

      // Update state
      this.setState({ onMouseDown: false });
    }
    else {
      // Register listener
      document.getElementById("paper").addEventListener('mousedown', this.onMouseDown, false);

      // Update text
      document.getElementById("onMouseDown").innerHTML = "Listening clicking";

      // Update state
      this.setState({ onMouseDown: true });
    }
  }

  onMouseDown = (event) => {
    // Update text with click coordinates
    document.getElementById("onMouseDown").innerHTML = "Click x: " + event.clientX + " Click y: " + event.clientY;
  }

  toggleOnMouseMove = () => {
    if (this.state.onMouseMove) {
      // Unregister listener
      document.getElementById("paper").removeEventListener('mousemove', this.onMouseMove, false);

      // Update text
      document.getElementById("onMouseMove").innerHTML = "Not listening movement";

      // Update state
      this.setState({ onMouseMove: false });
    }
    else {
      // Register listener
      document.getElementById("paper").addEventListener('mousemove', this.onMouseMove, false);

      // Update text
      document.getElementById("onMouseMove").innerHTML = "Listening movement";

      // Update state
      this.setState({ onMouseMove: true });
    }
  }

  onMouseMove = (event) => {
    // Update text with mouse coordinates
    document.getElementById("onMouseMove").innerHTML = "Mouse x: " + event.clientX + " Mouse y: " + event.clientY;
  }

  toggleOnScroll = () => {
    if (this.state.onScroll) {
      // Unregister listener
      document.getElementById("paper").removeEventListener('wheel', this.onScroll, false);

      // Update text
      document.getElementById("onScroll").innerHTML = "Not listening scrolling";

      // Reset vertical scroll amount
      this.setState({
        onScroll: false,
        verticalScrollAmount: 0,
        });
    }
    else {
      // Register listener
      document.getElementById("paper").addEventListener('wheel', this.onScroll, false);

      // Update text
      document.getElementById("onScroll").innerHTML = "Listening scrolling";

      // Update state
      this.setState({ onScroll: true });
    }
  }

  onScroll = (event) => {
    // Calculate sum based on state and vertical scroll amount
    const sum = this.state.verticalScrollAmount + event.deltaY;

    // Update text with vertical scroll sum
    document.getElementById("onScroll").innerHTML = "Vertical scroll sum: " + Math.round(sum);

    // Update state
    this.setState({ verticalScrollAmount: sum });
  }

  // Prevent memory leak by unregistering listeners on unmount
  componentWillUnmount() {
    if (this.state.onMouseDown) {
      document.getElementById("paper").removeEventListener('mousedown', this.onMouseDown, false);
      this.setState({ onMouseDown: false });
    }
    if (this.state.onMouseMove) {
      document.getElementById("paper").removeEventListener('mousemove', this.onMouseMove, false);
      this.setState({ onMouseMove: false });
    }
    if (this.state.onScroll) {
      document.getElementById("paper").removeEventListener('wheel', this.onScroll, false);
      this.setState({ onScroll: false });
    }
  }
}

export default PaperWithListeners;