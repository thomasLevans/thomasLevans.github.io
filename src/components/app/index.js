import React from 'react';
import Nav from '../nav';

import { Grid } from 'react-bootstrap';

export default React.createClass({
  render: function() {
    return (
      <div className='app-component'>
        <Nav />

        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
});
