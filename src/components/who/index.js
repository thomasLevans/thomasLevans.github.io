import React from 'react';
import {
  Grid,
  Well
} from 'react-bootstrap';

require('./Who.less');

const Who = React.createClass({

  render: function() {
    return (
      <div className='who-component'>
        <h3>Who I Am</h3>
        <blockquote>
          "Whether a thought is spoken or not it is a real thing and has powers of reality" - Frank Herbert
        </blockquote>
        <p>
          As a software engineer I harden my focus to the constant delivery of clean, robust code that adheres to patterns and best practices while meeting the requirements of the minimal viable product. I am highly adaptable, equally comfortable with both new and legacy technology. While I find I prefer backend work, I have no problem jumping into the frontend.
        </p>
        <p>
          I am constantly broadening my knowledge of software engineering principles and patterns, iteratively sharpening my skills as a developer to create solvent solutions with real business value. I intend to continue my journey as a life long learner, expanding my expertise to areas of security, dev ops, and in the near future a masters degree.
        </p>
        <p>
          I have contributed to a few open source projects over the last two years, and look forward to continuing to participate in the open source community. For the most part my github holds various projects that stem from a desire to learn about some framework or language that has caught my interest. Most are prototypal in nature and served as personal learning exercises. Have a project and need help? Feel free to contact me regarding collaborations, I am always open to new projects.
        </p>
      </div>
    );
  }

});

Who.displayName = 'WhoComponent';
// Who.propTypes = {};
// Who.defaultProps = {};

export default Who;
