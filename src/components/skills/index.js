import React from 'react';

require('./Skills.less');

const Skills = React.createClass({

  render: function() {
    return (
      <div className='skills-component'>
        <h3>My Skills</h3>
        <blockquote>
          "The beginning of knowledge is the discovery of something we do not understand." - Frank Herbert
        </blockquote>
      </div>
    );
  }

});

Skills.displayName = 'SkillsComponent';
// Skills.propTypes = {};
// Skills.defaultProps = {};

export default Skills;
