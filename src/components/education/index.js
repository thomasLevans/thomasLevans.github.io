import React from 'react';

require('./Education.less');

const Education = React.createClass({

  render: function() {
    return (
      <div className='education-component'>
        <h3>
          My Education
        </h3>
        <blockquote>

        </blockquote>
        <hr />
        <h4>
          B.A. Computer Science
        </h4>
        <h5>
          College of Charleston - May 2015
        </h5>
        <p>
          GPA 3.8
        </p>
        <p>
          what I focussed on ...
        </p>
        <h4>
          A.S. Computer Science
        </h4>
        <h5>
          Trident Technical College - December 2013
        </h5>
        <p>
          GPA 3.6
        </p>
        <p>
          what I focussed on ...
        </p>
      </div>
    );
  }

});

Education.displayName = 'EducationComponent';
// Education.propTypes = {};
// Education.defaultProps = {};

export default Education;
