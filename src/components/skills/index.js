import React from 'react';
import { connect } from 'react-redux';
import d3 from 'd3';

import { setPartition } from '../../creators';

require('./Skills.less');

export const Skills = React.createClass({

  render: function() {
    return (
      <div className='skills-component'>
        <h3>My Skills</h3>
        <blockquote>
          'The beginning of knowledge is the discovery of something we do not understand.' - Frank Herbert
        </blockquote>
      </div>
    );
  },

  componentWillMount: function() {
    const part = d3.layout.partition()
      .sort(null)
      .size([Math.PI * 2, Math.pow(250, 2)])
      .value(d => 1);

    if (this.props.dispatch) {
      console.log(part.nodes(this.props.skills));
      this.props.dispatch(setPartition());
      console.log(this.props);
    }
  },

  componentDidMount: function() {
    console.log(this.props);
  }

});

Skills.displayName = 'SkillsComponent';
// Skills.propTypes = {};
// Skills.defaultProps = {};

function mapStateToProps(state) {
  return {
    skills: state.skills
  }
}

export const SkillsContainer = connect(mapStateToProps)(Skills);
