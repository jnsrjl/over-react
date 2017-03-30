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

// Styles
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
};

// Photos
const PHOTOS = [
  { path: photo_derp, name: "derp", sizeKB: 7244 },
  { path: photo_hover, name: "hover", sizeKB: 60 },
  { path: photo_roar, name: "roar", sizeKB: 7871 },
  { path: photo_roll, name: "roll", sizeKB: 134 },
  { path: photo_adorbs, name: "adorbs", sizeKB: 99 },
  { path: photo_grumpy, name: "grumpy", sizeKB: 53 },
  { path: photo_white, name: "white", sizeKB: 37 },
];

/*
* Component with radio buttons which trigger filtering
* @prop onFilterChange(filterValue) : function
*/
class Filter extends React.Component {

  // On change : pass filter's value to parent
  handleFilterChange = (e) => {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    return (
      <Paper style={ styles.radioPaper } zDepth={3}>
        <Subheader>Filters</Subheader>
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

/*
* Component for a grid of images
* @prop photos : json array
*/
class ImageGrid extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={4}
        >
          <Subheader>Images</Subheader>
          {this.props.photos.map((photo, id) => (
            <GridTile
              key={id}
              title={photo.name}
              subtitle={<span>size <b>{photo.sizeKB}KB</b></span>}
            >
              <img
                src={photo.path}
                alt=""
              />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

/*
* Component with image grid that can be filtered with radio buttons
* @child Filter
* @child ImageGrid
*/

class FilterableImageGrid extends React.Component {

  constructor(props) {
    super(props);
    // Init state with static photos
    this.state = {
      photos: PHOTOS,
    };
  }

  // Init filter
  componentWillMount = () => {
    this.handleFilterChange("name_asc");
  }

  /*
  * Handler for filter change : passed from Filter
  * @param filterValue : string
  */
  handleFilterChange = (filterValue) => {
    // Get current photo list
    let photos = this.state.photos;

    // Init comparing function
    let sortBy = null;

    // Set comparing function by param
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

    // Sort by passing comparing function
    photos.sort(sortBy);

    // Set new state
    this.setState({ photos: photos });
  }

  /*
  * @prop onFilterChange : function : to Filter
  * @prop photos : json array : to ImageGrid
  */
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
