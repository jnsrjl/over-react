import React from 'react';

// MUI components
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

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

class FilterableImageGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={4}
          cellHeight='auto'
          style={styles.gridList}
        >
          <Subheader>Images</Subheader>
          {this.state.photos.map((photo) => (
            <GridTile
              key={photo.id}
              title={photo.title}
              subtitle={<span>by <b>dude</b></span>}
            >
              <img src={photo.thumbnailUrl} alt="" />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default FilterableImageGrid;
