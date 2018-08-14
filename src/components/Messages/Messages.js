import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div>
    Messages page
    <NavLink
      to="/profile"
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      To profile
    </NavLink>
  </div>
);
