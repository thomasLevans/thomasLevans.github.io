import React from 'react';

require('./Contact.less');

const Contact = React.createClass({

  render: function() {
    return (
      <div className='contact-component'>
        <h3>Contact Me</h3>
        <hr />
        <p>
          <a href="/res/resume_5_16.pdf">My Resume</a> | 
          <a href="https://github.com/thomasLevans">My Github</a> |
          <a href="https://www.linkedin.com/in/tom-evans-46ba187a">My LinkedIn</a>
        </p>
      </div>
    );
  }

});

Contact.displayName = 'ContactComponent';
// Contact.propTypes = {};
// Contact.defaultProps = {};

export default Contact;
