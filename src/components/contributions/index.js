import React from 'react';

require('./Contributions.less');

const Contributions = React.createClass({

  render: function() {
    return (
      <div className='contributions-component'>
        <h3>My Open Source Contributions</h3>
        <blockquote>

        </blockquote>
        <hr />
        <h4>
          Biomedical Informatics Center Translational Science Dashboard
        </h4>
        <p>
          Developed for the Medical University of South Carolina with the cooperation of the Biometrics Informatics Research Group, the dashboard has been an ongoing project of mine since December 2015. Leveraging MUSC's participation in Open Linked Data, the dashboard allows the user to track the research trends of an institution in terms of the bridge from basic to clinical science based research. Checkout the live
          <a href="http://jobeid.github.io/tsdashboard/"> demo</a>!
        </p>
        <hr />
        <h4>
          Topsoil
        </h4>
        <p>
          Developed in the Cyber Infrastructure Research and Development Lab for the Earth Sciences (CIRDLES), Topsoil is a visualization tool built on the Java 8 webkit to aid geochronologists in generating visualizations of sample data for publication. Topsoil's visualizations are powered by the D3.js library, leveraging easily exportable scalable vector graphics. Over a period of five months I aided in the refinement of Topsoil's chart rendering, and integrated unit testing via Karma.js. For more information checkout the
          <a href="http://cirdles.org/projects/topsoil/"> project</a>!
        </p>
      </div>
    );
  }

});

Contributions.displayName = 'ContributionsComponent';
// Contributions.propTypes = {};
// Contributions.defaultProps = {};

export default Contributions;
