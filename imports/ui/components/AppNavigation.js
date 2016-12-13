import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

const AppNavigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">MovieGoober</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);

export default AppNavigation;
