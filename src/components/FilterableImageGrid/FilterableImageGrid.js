import React from 'react';

// MUI components
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

// Pics
import photo_derp from './cat_derp.jpeg';
import photo_hover from './cat_hover.jpg';
import photo_roar from './cat_roar.jpeg';
import photo_roll from './cat_roll.jpg';
import photo_adorbs from './cat_adorbs.jpg';
import photo_grumpy from './cat_grumpy.jpeg';
import photo_white from './cat_white.jpg';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  radioPaper: {
    width: 300,
    margin: 10,
    padding: 10,
  },
  gridList: {
    overflowY: 'auto',
  }
};

const PHOTOS = [
  { path: photo_derp, name: "derp", sizeKB: 7244 },
  { path: photo_hover, name: "hover", sizeKB: 60 },
  { path: photo_roar, name: "roar", sizeKB: 7871 },
  { path: photo_roll, name: "roll", sizeKB: 134 },
  { path: photo_adorbs, name: "adorbs", sizeKB: 99 },
  { path: photo_grumpy, name: "grumpy", sizeKB: 53 },
  { path: photo_white, name: "white", sizeKB: 37 },
];

class Filter extends React.Component {

  handleFilterChange = (e) => {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    return (
      <Paper style={ styles.radioPaper } zDepth={3}>
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
      </Paper>
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
      photos: PHOTOS,
    };
  }

  componentDidMount = () => {
    this.handleFilterChange("name_asc");
  }

  handleFilterChange = (filterValue) => {
    let photos = this.state.photos;
    let sortBy = null;

    if (filterValue === "name_asc") {
      sortBy = (a,b) => { return a.name.localeCompare(b.name) };
    }
    if (filterValue === "name_desc") {
      sortBy = (a,b) => { return b.name.localeCompare(a.name) };
    }
    if (filterValue === "size_asc") {
      sortBy = (a,b) => { return a.sizeKB - b.sizeKB };
    }
    if (filterValue === "size_desc") {
      sortBy = (a,b) => { return b.sizeKB - a.sizeKB };
    }

    photos.sort(sortBy);
    this.setState({ photos: photos });
  }

  render() {
    return (
      <div>
        <Filter
          onFilterChange={ this.handleFilterChange }
        />
        <ImageGrid
          photos={ this.state.photos }
        />
      </div>
    );
  }
}

export default FilterableImageGrid;
