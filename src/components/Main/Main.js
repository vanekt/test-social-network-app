import React from 'react';
import { Redirect } from 'react-router-dom';

export default ({ userId }) => (
  <Redirect to={`/profile/${userId}`} />
);
