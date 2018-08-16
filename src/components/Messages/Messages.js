import React from 'react';
import Dialog from '../Dialog';
import DialogList from '../DialogList';

export default ({ match }) => <div>{match.params.peerId ? <Dialog /> : <DialogList />}</div>;
