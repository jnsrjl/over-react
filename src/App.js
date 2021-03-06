import React, { Component } from 'react';

// onTouchTap Requirement
import injectTapEventPlugin from 'react-tap-event-plugin';

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// MUI Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// My Components
import LandingPage from './components/LandingPage';
import ListenerPaper from './components/ListenerPaper';
import AppBarWithLink from './components/AppBarWithLink';
import PeopleStatsView from './components/PeopleStatsView';
import FilterableImageGrid from './components/FilterableImageGrid/FilterableImageGrid';
import ColorCreator from './components/ColorCreator/ColorCreator';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  menuItems = [
      { text: "Home", component: <LandingPage /> },
      { text: "1.4 : Listeners", component: <ListenerPaper /> },
      { text: "2.1 : AppBar Link", component: <AppBarWithLink /> },
      { text: "2.2 : People Stats View", component: <PeopleStatsView /> },
      { text: "3.4 : Filterable Image Grid", component: <FilterableImageGrid /> },
      { text: "4.4 : Color Editor", component: <ColorCreator /> },
  ];

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      contentId: this.menuItems.length - 1,
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Drawer
            docked={ false }
            open={ this.state.drawerOpen }
            onRequestChange={ this.closeDrawer }
          >
            { this.menuItems.map((item, id) =>
              <MenuItem
                key={ "drawerItem_" + id }
                primaryText={ item.text }
                onTouchTap={ () => this.handleMenu(id) }
              />
            )}

          </Drawer>
          <AppBar
            title="popgui"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={ this.openDrawer }
          />
          { this.renderContent() }
        </div>
      </MuiThemeProvider>
    );
  }

  openDrawer = () => {
    this.setState({ drawerOpen: true });
  }

  closeDrawer = () => {
    this.setState({ drawerOpen: false });
  }

  handleMenu = (id) => {
    this.setState({ contentId: id });
    this.closeDrawer();
  }

  renderContent = () => {
    // Render component in menuItems based on componentId in state
    return this.menuItems[this.state.contentId].component;
  };
}

export default App;
