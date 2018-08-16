import React from 'react';
import Dialog from '../Dialog';
import DialogList from '../DialogList';

export default ({ match }) => {
  const renderComponent = match.params.peerId ? (
    <Dialog peerId={parseInt(match.params.peerId, 10)} />
  ) : (
    <DialogList />
  );
  return <div>{renderComponent}</div>;
};
