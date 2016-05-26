import React from 'react';
import d3 from 'd3';

require('./Arc.less');

// calculates the d of the path creating Arcs
const arcCalc = d3.svg.arc()
  .startAngle((d) => { return d.x; })
  .endAngle((d) => { return d.x + d.dx; })
  .innerRadius((d) => { return Math.sqrt(d.y); })
  .outerRadius((d) => { return Math.sqrt(d.y + d.dy); });

// ordinal scale for color provided by d3
const fill = d3.scale.category20();

const Arc = React.createClass({

  render: function() {
    return (
      <path
        className='arc-component'
        d={ this.calc() }
        style={{ stoke: 'white', fill: this.getFill(), fillRule: 'evenodd'}}
        display={ this.shouldDisplay() }
        >
      </path>
    );
  },

  calc: function() {
    return this.props.datum ? arcCalc(this.props.datum) : 'DNE';
  },

  getFill: function() {
    return this.props.datum ? fill(this.props.datum) : 'red';
  },

  shouldDisplay: function() {
    return this.props.datum.depth ? null : 'none';
  }

});

Arc.displayName = 'ArcComponent';

// Arc.propTypes = {};
// Arc.defaultProps = {};

export default Arc;
