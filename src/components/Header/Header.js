import React from 'react';

export default ({ userId, username, logout }) => {
  const userArea = userId ? (
    <div>
      <span>{username}</span>
      <button type="button" onClick={logout}>Exit</button>
    </div>
  ) : null;

  return (
    <div>
      {userArea}
    </div>
  );
};
