import React from 'react';

// MUI components
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SelectViewMagic extends React.Component {
  styles = {
    main: {
      margin: 50,
      padding: 10
    }
  }

  render() {
    return (
      <div style={ this.styles.main }>
        SelectFieldMagic
      </div>
    );
  }
}

export default SelectViewMagic;
