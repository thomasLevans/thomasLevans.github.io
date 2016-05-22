import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

require('./Nav.less');

// FIXME : remove the hardcoded project URI param...

const NavComponent = React.createClass({
  render: function() {
    return (
      <Nav bsStyle='tabs' justified className='nav-component'>
        <LinkContainer to={{ pathname: '/' }}>
          <NavItem>
            thomasLevans
          </NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: '/who' }}>
          <NavItem>
            Who
          </NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: '/skills' }}>
          <NavItem>
            Skills
          </NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: '/experience' }}>
          <NavItem>
            Experience
          </NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: '/education' }}>
          <NavItem>
            Education
          </NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: '/contributions' }}>
          <NavItem>
            Open Source Contributions
          </NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: '/contact' }}>
          <NavItem>
            Learn More...
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }
});

NavComponent.displayName = 'Nav';

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default NavComponent;
