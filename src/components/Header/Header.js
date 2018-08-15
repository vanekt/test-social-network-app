import React from 'react';
import avatarPlaceholder from '../../img/avatar.jpg';

export default ({ avatar, userId, username, logout }) => {
  const userAvatar = avatar ? avatar : avatarPlaceholder;
  const userArea = userId ? (
    <div>
      <img src={userAvatar} title={username} alt={username} />
      <button type="button" onClick={logout}>
        Exit
      </button>
    </div>
  ) : null;

  return <div>{userArea}</div>;
};
