import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
// import List from 'material-ui/List';
// import ListItem from 'material-ui/List';
// import Subheader from 'material-ui/Subheader';

const style = {
  paper: {
    width: 300,
    height: 300,
    margin: 20,
    padding: 20,
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <Paper style={ style.paper } id="paper" zDepth={5}>
        <Checkbox
          checked={this.state.checked}
          label="onMouseDown"
          onCheck={ this.toggleOnMouseDown }
        />
        <ul>
          <li id="onMouseDownText">Not listening onMouseDown</li>
        </ul>
      </Paper>
    );
  }

  toggleOnMouseDown = () => {
    if (this.state.checked) {
      document.getElementById("paper").removeEventListener('mousedown', this.onMouseDown, false);
      console.log("Unregistered");
      this.setState({ checked: false });
    }
    else {
      document.getElementById("paper").addEventListener('mousedown', this.onMouseDown, false);
      console.log("Registered");
      this.setState({ checked: true });
    }
  }

  onMouseDown = (event) => {
    document.getElementById("onMouseDownText").innerHTML = "Mouse x: " + event.clientX + " Mouse y: " + event.clientY;
  }

  // Prevent memory leak
  componentWillUnmount() {
    // Check if listener is registered
    if (this.state.checked) {
      document.getElementById("paper").removeEventListener('mousedown', this.onMouseDown, false);
      console.log("Unregistered");
      this.setState({ checked: false });
    }
  }
}

export default App;
