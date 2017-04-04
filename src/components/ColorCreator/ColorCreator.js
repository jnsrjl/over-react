import React from 'react';

// MUI components
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

const styles = {
  colorCreator: {
    width: 760,
    padding: 20,
  },
  gridList: {
    margin: '20px auto',
    border: '1px solid black',
    overflowY: 'auto',
  },
};

const COLORS = [
  { name: "moss green", rgb: "rgb(255,0,0)" },
  { name: "fuchia", rgb: "rgb(255,0,0)" },
  { name: "salmon", rgb: "rgb(255,0,0)" },
  { name: "powder blue", rgb: "rgb(255,0,0)" },
  { name: "turquoise", rgb: "rgb(255,0,0)" },
  { name: "aquamarine", rgb: "rgb(0,0,255)" },
];

const COMBOS= [
  { name: "salmon", rgb: "rgb(250,128,114)" },
  { name: "salmon", rgb: "rgb(250,128,114)" },
  { name: "salmon", rgb: "rgb(250,128,114)" },
  { name: "salmon", rgb: "rgb(250,128,114)" },
  { name: "salmon", rgb: "rgb(250,128,114)" },
  { name: "salmon", rgb: "rgb(250,128,114)" },
  { name: "salmon", rgb: "rgb(250,128,114)" },
  { name: "salmon", rgb: "rgb(250,128,114)" },
  { name: "salmon", rgb: "rgb(250,128,114)" },
  { name: "salmon", rgb: "rgb(250,128,114)" },
  { name: "salmon", rgb: "rgb(250,128,114)" },
];

class UndoRedo extends React.Component {
  render() {
    return (
      <div>
        <RaisedButton
          label="Undo"
        />
        <RaisedButton
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
          value={0}
          onChange={null}
        >
          { this.props.colors.map((item, id) => {
            return <MenuItem
              key={ "color_" + id }
              value={ id }
              primaryText={ item.name }
            />;
          })}
        </SelectField>
        <p>Red</p>
        <Slider
          name="red"
          min={0}
          max={255}
          step={1}
        />
        <p>Green</p>
        <Slider
          name="green"
          min={0}
          max={255}
          step={1}
        />
        <p>Blue</p>
        <Slider
          name="blue"
          min={0}
          max={255}
          step={1}
        />
        <Paper
          style={{
            height: 100,
            width: 100,
            margin: 15,
            backgroundColor: "rgb(250,128,114)",
            textAlign: 'center',
          }}
          circle={true}
        />
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
      <GridList
        style={ styles.gridList }
        cols={6}
      >
        { this.props.combos.map((item, id) => (
          <GridTile
            key={"tile_" + id}
            title={item.name}
            style={{
              backgroundColor: item.rgb,
            }}
          />
        ))}
      </GridList>
    );
  }
}

class ColorCreator extends React.Component {

  render() {
    return (
      <div style={ styles.colorCreator }>
        <UndoRedo />
        <ColorEditor colors={COLORS} />
        <ColorList combos={COMBOS} />
      </div>
    );
  }
}

export default ColorCreator;
