import React from 'react';

export default ({ avatar, userId, username, logout }) => {
  const userArea = userId ? (
    <div>
      <img src={avatar} title={username} alt={username} />
      <button type="button" onClick={logout}>
        Exit
      </button>
    </div>
  ) : null;

  return <div>{userArea}</div>;
};
