import React from 'react';
import { connect } from 'react-redux';
import d3 from 'd3';

import { setPartition } from '../../creators';

import Arc from '../arc';

require('./Skills.less');

export const Skills = React.createClass({

  render: function() {
    return (
      <div className='skills-component'>
        <h3>My Skills</h3>
        <blockquote>
          'The beginning of knowledge is the discovery of something we do not understand.' - Frank Herbert
        </blockquote>
        <svg width={ 500 } height={ 500 }>
          <g transform={ `translate(${250},${250})` }>
            {
              this.props.skills.map((d, i) => {
                return <Arc key={ d.name + i } datum={ d } />;
              })
            }
          </g>
        </svg>
      </div>
    );
  },

  componentWillMount: function() {
    // console.log(this.props);
    // if (this.props.dispatch) {
    //   this.props.dispatch(setPartition());
    // }
  },

  componentDidMount: function() {
    // console.log(this.props);
  },

  componentWillReceiveProps(newProps) {
    // console.log(newProps);
  }

});

Skills.displayName = 'SkillsComponent';
// Skills.propTypes = {};
Skills.defaultProps = {
  skills: []
};

function mapStateToProps(state) {
  return {
    skills: state.skills
  }
}

export const SkillsContainer = connect(mapStateToProps)(Skills);
