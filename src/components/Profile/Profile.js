import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div>
    Profile page
    <NavLink
      to="/messages"
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      To messages
    </NavLink>
  </div>
);
