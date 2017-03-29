import React from 'react';

// MUI components
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

// Pics
import derp from './cat_derp.jpeg';
import hover from './cat_hover.jpg';
import roar from './cat_roar.jpeg';
import roll from './cat_roll.jpg';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  }
};

const PHOTOS = [
  { path: derp, name: "derp", sizeKB: 7244 },
  { path: hover, name: "hover", sizeKB: 60 },
  { path: roar, name: "roar", sizeKB: 7871 },
  { path: roll, name: "roll", sizeKB: 134 },
];

class Filter extends React.Component {

  handleFilterChange = (e) => {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    return (
      <div>
        <Subheader>Active filter : { this.props.filterValue }</Subheader>
        <RadioButtonGroup
          name="filter"
          defaultSelected="name_asc"
          onChange={ this.handleFilterChange }
        >
          <RadioButton
            value="name_asc"
            label="File Name Ascending"
          />
          <RadioButton
            value="name_desc"
            label="File Name Descending"
          />
          <RadioButton
            value="size_asc"
            label="File size Ascending"
          />
          <RadioButton
            value="size_desc"
            label="File size Descending"
          />
        </RadioButtonGroup>
      </div>
    );
  }
}

class ImageGrid extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={4}
          style={styles.gridList}
        >
          <Subheader>Images</Subheader>
          {this.props.photos.map((photo, id) => (
            <GridTile
              key={id}
              title={photo.name}
              subtitle={<span>size <b>{photo.sizeKB}KB</b></span>}
            >
              <img src={photo.path} alt="" />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

class FilterableImageGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterValue: "name_asc",
    };
  }

  handleFilterChange = (filterValue) => {
    this.setState({
      filterValue: filterValue
    });
  }

  render() {
    return (
      <div>
        <Filter
          filterValue={ this.state.filterValue }
          onFilterChange={ this.handleFilterChange }
        />
        <ImageGrid
          photos={ PHOTOS }
          filterValue={ this.state.filterValue }
        />
      </div>
    );
  }
}

export default FilterableImageGrid;
