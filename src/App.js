import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: 300,
    height: 300,
    margin: 20,
    padding: 20,
};

class App extends Component {
  render() {
    return (
      <div>
        <Paper style={ style }>
          <RaisedButton label="Hello, World!" />
        </Paper>
      </div>
    );
  }
}

export default App;
