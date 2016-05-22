import React from 'react';

require('./Experience.less');

const Experience = React.createClass({

  render: function() {
    return (
      <div className='experience-component'>
        <h3>
          My Experience
        </h3>
        <blockquote>
          "Something something dark side something something force" - Emperor Palpatine
        </blockquote>
        <hr />
        <h4>
          Softare Engineer
        </h4>
        <h5>
          SAW Software Mill - June 2015 - present
        </h5>
        <p>
          Responsibilities...
        </p>
        <hr />
        <h4>
          Softare Engineer Intern
        </h4>
        <h5>
          Biomedical Informatics Center, Medical University of South Carolina - December 2014 - June 2015
        </h5>
        <p>
          Responsibilities...
        </p>
        <hr />
        <h4>
          Softare Engineer Intern
        </h4>
        <h5>
          Cyber Infrastructure Research and Development Lab for the Earth Sciences, College of Charleston - January 2015 - May 2015
        </h5>
        <p>
          Responsibilities...
        </p>
      </div>
    );
  }

});

Experience.displayName = 'ExperienceComponent';
// Experience.propTypes = {};
// Experience.defaultProps = {};

export default Experience;
