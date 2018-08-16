import React from 'react';
import { NavLink } from 'react-router-dom';
import { lifecycle } from 'recompose';

const DialogList = ({ dialogs, dialogListError }) => (
  <div>
    <span>{dialogListError}</span>
    {dialogs.map(dialog => (
      <NavLink key={dialog.peerId} to={`/messages/${dialog.peerId}`}>
        <img src={dialog.image} alt={dialog.username} title={dialog.username} />
        <div>{dialog.username}</div>
      </NavLink>
    ))}
  </div>
);

export default lifecycle({
  componentDidMount() {
    const { userId, fetchDialogs } = this.props;
    fetchDialogs(userId);
  }
})(DialogList);
