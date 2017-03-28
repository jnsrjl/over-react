import React from 'react';

// MUI components
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class PeopleStatsView extends React.Component {
  styles = {
    main: {
      margin: 50,
      padding: 10
    }
  }

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
      // Current person id
      current: 0,

      // Menu open
      open: false
    }
  }

  handleTouchTap = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  previous = () => {
    const current = this.state.current;
    this.setState({
      current: current - 1,
      open: false
    });
  }

  next = () => {
    const current = this.state.current;
    this.setState({
      current: current + 1,
      open: false
    });
  }

  render() {
    return (
      <div style={ this.styles.main }>
        <RaisedButton
          primary={ true }
          label="View"
          onTouchTap={ this.handleTouchTap }
        />
        <Popover
          open={ this.state.open  }
          anchorEl={ this.state.anchorEl }
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={ this.handleRequestClose }
        >
        { this.people.length !== 0 &&
          <Menu>
            { this.state.current > 0 &&
              <MenuItem
                primaryText="Previous"
                onTouchTap={ this.previous }
              />
            }
            { this.state.current < this.people.length - 1 &&
              <MenuItem
                primaryText="Next"
                onTouchTap={ this.next }
              />
            }
          </Menu>
        }
        </Popover>
        <ul>
          <li>First name: { this.people[this.state.current].first }</li>
          <li>Last name: { this.people[this.state.current].last }</li>
          <li>Birth place: { this.people[this.state.current].town }</li>
          <li>Birth year: { this.people[this.state.current].year }</li>
        </ul>
      </div>
    );
  }
}

export default PeopleStatsView;