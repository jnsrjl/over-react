import React from 'react';

// MUI
import { cyan500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';

class PeopleResource extends React.Component {
  menuItems = [
    { text: "Generate" },
    { text: "Index" },
    { text: "Analyze" }
  ];

  styles = {
    main: {
      margin: 50,
      padding: 10,
      border: cyan500 + " solid 1px"
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      dialogOpen: false,
    };
  }

  handleTouchTap = (event) => {
    this.setState({
      menuOpen: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({ menuOpen: false });
  };

  handleMenuTap = (id) => {
    console.log(id);
  }

  /*generatePeople = async (input) => {
    // TODO : Disable UI

    // Get people data from jsonplaceholder.com
    const root = "https://jsonplaceholder.typicode.com";
    await fetch(root + "/people/?_limit=" + input)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ people: res.data });
      })
  }*/

  render() {
    return (
      <div style={ this.styles.main }>
        <RaisedButton
          style={ this.styles.button }
          primary={ true }
          onTouchTap={ this.handleTouchTap }
          label="Actions"
        />
        <Popover
          open={ this.state.menuOpen }
          anchorEl={ this.state.anchorEl }
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={ this.handleRequestClose }
        >
          <Menu>
            { this.menuItems.map((item, id) =>
                <MenuItem
                  key={ "menu_" + id }
                  primaryText={ item.text }
                  onTouchTap={ () => this.handleMenuTap(id) }
                />
              )
            }
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default PeopleResource;
