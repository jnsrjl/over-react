import React from 'react';

// MUI components
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class PeopleStatsEdit extends React.Component {
  styles = {
    paper: {
      margin: 50,
      padding: 10,
      width: 400,
    },
  };

  people = [
    {
      first: "John",
      last: "Moe",
      town: "Korso",
      year: 1953
    },
    {
      first: "Won",
      last: "Doe",
      town: "Morso",
      year: 1954
    },
    {
      first: "Ton",
      last: "Hoe",
      town: "Horso",
      year: 1892
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      defaultValue: '',
      currentId: 0,
      person: {
        first: "",
        last: "",
        town: "",
        year: 0
      }
    }
  }

  handleOpen = () => {
    this.setState({
      open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  mapObject = (object, callback) => {
    return Object.keys(object).map((key => {
      return callback(key, object[key]);
    }));
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancel"
        onTouchTap={this.handleClose}
      />,
      <RaisedButton
        label="Confirm Edit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <Paper style={ this.styles.paper } zDepth={3} >
        <div>
          { this.people.forEach(this.mapObject(this.person, (key, value) => {
            return (
              <div key={"list_" + key}>
                <p>{key} : {value}</p>
                <FloatingActionButton
                    style={ this.styles.button }
                    mini={ true }
                    onTouchTap={ this.handleOpen }
                >
                  <ModeEdit />
                </FloatingActionButton>
              </div>

            );
          }))}
          </div>
        <Dialog
          open={ this.state.open }
          actions={ actions }
          title='Edit property'
          modal={ true }
        >
          <TextField
            defaultValue={ this.state.defaultValue }
          />
        </Dialog>
      </Paper>
    );
  }
}

export default PeopleStatsEdit;
