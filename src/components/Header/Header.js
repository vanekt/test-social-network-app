import React from 'react';

export default ({ userId, logout }) => {
  const userArea = userId ? (
    <div>
      <span>UserId: {userId}</span>
      <button type="button" onClick={logout}>Exit</button>
    </div>
  ) : null;

  return (
    <div>
      {userArea}
    </div>
  );
};
