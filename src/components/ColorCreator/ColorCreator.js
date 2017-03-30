import React from 'react';

// MUI components
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import GridList from 'material-ui/GridList';

const styles = {
  colorCreator: {
    width: 760,
    padding: 20,
  },
  gridList: {
    height: 400,
    margin: '20px auto',
    border: '1px solid black',
  }
};

class UndoRedo extends React.Component {
  render() {
    return (
      <div>
        <FlatButton
          label="Undo"
        />
        <FlatButton
          label="Redo"
        />
      </div>
    );
  }
}

class ColorEditor extends React.Component {
  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Color Name"
        >
          <MenuItem primaryText="Purple" />
          <MenuItem primaryText="Yellow" />
          <MenuItem primaryText="Orange" />
          <MenuItem primaryText="Cyan" />
        </SelectField>
        <p>Red</p>
        <Slider />
        <p>Green</p>
        <Slider />
        <p>Blue</p>
        <Slider />
        <RaisedButton
          label="Add"
          primary={true}
        />
      </div>
    );
  }
}

class ColorList extends React.Component {
  render() {
    return (
      <GridList style={ styles.gridList } >
      </GridList>
    );
  }
}

class ColorCreator extends React.Component {
  render() {
    return (
      <div style={ styles.colorCreator }>
        <UndoRedo />
        <ColorEditor />
        <ColorList />
      </div>
    );
  }
}

export default ColorCreator;
