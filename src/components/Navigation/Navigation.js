import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';

export default ({ userId }) => {
  if (!userId) {
    return null;
  }

  return (
    <div className={style.navigation}>
      <div className={style.container}>
        <NavLink to="/profile">My page</NavLink>
        <NavLink to="/messages">Messages</NavLink>
      </div>
    </div>
  );
};
