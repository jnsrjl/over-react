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
  { name: "moss green" },
  { name: "fuchia" },
  { name: "salmon" },
  { name: "powder blue" },
  { name: "turquoise" },
  { name: "aquamarine" },
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

/*
* Edit color by choosing name (dropdown) and rgbs with sliders
* @prop colors : array : { name: "green" }
*/
class ColorEditor extends React.Component {

  // Send SelectField's value to parent
  handleSelectFieldChange = (event, index, value) => {
    this.props.onSelectFieldChange(value);
  }

  // Select slider's name and value to parent
  handleSliderRedChange = (event, value) => {
    this.props.onSliderChange("red", value);
  }

  handleSliderGreenChange = (event, value) => {
    this.props.onSliderChange("green", value);
  }

  handleSliderBlueChange = (event, value) => {
    this.props.onSliderChange("blue", value);
  }

  handleAddTouchTap = () => {
    this.props.onAddTouchTap();
  }

  color = () => {
    let red = this.props.red;
    let green = this.props.green;
    let blue = this.props.blue;
    return "rgb(" + red + "," + green + "," + blue + ")";
  }

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Color Name"
          value={ this.props.selectFieldValue }
          onChange={ this.handleSelectFieldChange }
        >
          { this.props.colors.map((item, id) => (
            <MenuItem
              key={ "color_" + id }
              value={ id }
              primaryText={ item.name }
            />
          ))}
        </SelectField>
        <p>Red</p>
        <Slider
          name="red"
          min={0}
          max={255}
          step={1}
          onChange={ this.handleSliderRedChange }
        />
        <p>Green</p>
        <Slider
          name="green"
          min={0}
          max={255}
          step={1}
          onChange={ this.handleSliderGreenChange }
        />
        <p>Blue</p>
        <Slider
          name="blue"
          min={0}
          max={255}
          step={1}
          onChange={ this.handleSliderBlueChange }
        />
        <Paper
          style={{
            height: 100,
            width: 100,
            margin: 15,
            backgroundColor: this.color(),
            textAlign: 'center',
          }}
          circle={true}
        />
        <RaisedButton
          label="Add"
          primary={true}
          onTouchTap={ this.handleAddTouchTap }
        />
      </div>
    );
  }
}

/*
* Display grid of boxes with name and color
* @prop combos : array : { name: "", color: "rgb(0,0,0)" }
*/
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

  constructor(props) {
    super(props);
    this.state = {
      selectFieldValue: 1,
      red: 0,
      green: 0,
      blue: 0,
      combos: [],
    };
  }

  handleSelectField = (value) => {
    this.setState({ selectFieldValue: value });
  }

  handleSlider = (name, value) => {
    if (0 <= value && value <= 255) {
      this.setState({ [name]: value });
    }
  }

  handleAdd = () => {
    let arr = this.state.combos.slice();
    let combo = {
      name: COLORS[this.state.selectFieldValue].name,
      rgb: "rgb(" +
            this.state.red +
            "," +
            this.state.green +
            "," +
            this.state.blue +
            ")",
    };
    arr.push(combo);
    this.setState({ combos: arr });
  }

  render() {
    return (
      <div style={ styles.colorCreator }>
        <UndoRedo
          onUndo={ this.handleUndo }
          onRedo={ this.handleRedo }
        />
        <ColorEditor
          colors={COLORS}
          red={ this.state.red }
          green={ this.state.green }
          blue={ this.state.blue }
          selectFieldValue={ this.state.selectFieldValue }
          onSelectFieldChange={ this.handleSelectField }
          onSliderChange={ this.handleSlider }
          onAddTouchTap={ this.handleAdd }
        />
        <ColorList combos={ this.state.combos } />
      </div>
    );
  }
}

export default ColorCreator;
