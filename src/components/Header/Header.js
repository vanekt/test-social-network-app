import React from 'react';
import avatarPlaceholder from '../../img/avatar.jpg';
import styles from './Header.module.scss';

export default ({ avatar, userId, username, logout }) => {
  const userAvatar = avatar ? avatar : avatarPlaceholder;
  const userArea = userId ? (
    <div className={styles.userArea}>
      <span className={styles.userName}>{username}</span>
      <img className={styles.avatar} src={userAvatar} title={username} alt={username} />
      <button type="button" onClick={logout}>
        Exit
      </button>
    </div>
  ) : null;

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.title}>Simple social network</div>
        {userArea}
      </div>
    </div>
  );
};
