import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Friend.module.scss';

export default ({ data }) => {
  return (
    <NavLink to={`/profile/${data.id}`} className={styles.friend}>
      <img src={data.image} alt={data.fullname} title={data.fullname} className={styles.avatar} />
      <span className={styles.username}>{data.fullname}</span>
    </NavLink>
  );
};
