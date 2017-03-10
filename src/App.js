import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

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
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  render() {
    return (
      <Paper style={ style.paper } id="paper">
        <Checkbox
          checked={this.state.checked}
          label="onMouseDown"
          onCheck={ this.toggleOnMouseDown }
        />
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

  onMouseDown = () => {
    console.log("Mouse Click!");
  }
}

export default App;
