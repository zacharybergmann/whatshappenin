import React from 'react';
import { IndexLink } from 'react-router';

const Nav = () => (
  <div>
    <IndexLink activeClassName="active" to="/eventspage">Events Page</IndexLink>&nbsp;
    <IndexLink activeClassName="active" to="/eventspage/userpage">User Page</IndexLink>&nbsp;
  </div>
);

export default Nav;
