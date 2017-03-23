import React from 'react';

// MUI components
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class AppBarWithLink extends React.Component {
  styles = {
    main: {
      margin: 50,
      padding: 10
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  followLink = () => {
    window.location.href = "http://uta.fi";
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Go"
        primary={true}
        onTouchTap={this.followLink}
      />,
    ];

    return (
      <div style={ this.styles.main }>
        <AppBar
          title="Exercise 2.1"
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem
                primaryText="Link"
                onTouchTap={ this.handleOpen }
              />
            </IconMenu>
          }
        />
        <Dialog
          title="Dialog with outside link"
          actions={actions}
          modal={true}
          open={ this.state.open }
        >
          Click Go for magic!
        </Dialog>
      </div>
    );
  }
}

export default AppBarWithLink;
