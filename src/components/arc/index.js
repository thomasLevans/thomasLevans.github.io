import React from 'react';
import d3 from 'd3';

require('./Arc.less');

const Arc = React.createClass({

  render: function() {
    return (
      <path
        key={ this.getKey() }
        className='arc-component'
        d={ this.calc() }
        style={`stoke: white; fill: ${this.getFill()}; fill-rule: evenodd;`}
        >
      </path>
    );
  },

  getKey: function() {
    return this.datum ? this.datum.name : '';
  },

  calc: function() {
    const arc = d3.svg.arc()
      .startAngle((d) => { return d.x; })
      .endAngle((d) => { return d.x + d.dx; })
      .innerRadius((d) => { return Math.sqrt(d.y); })
      .outerRadius((d) => { return Math.sqrt(d.y + d.dy); });

    return this.datum ? arc(this.datum) : 'DNE';
  },

  getFill: function() {
    const fill = d3.scale.category20();
    return this.datum ? fill(this.datum) : 'red';
  }

});

Arc.displayName = 'ArcComponent';

// Arc.propTypes = {};
// Arc.defaultProps = {};

export default Arc;
