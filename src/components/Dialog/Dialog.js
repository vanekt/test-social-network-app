import React from 'react';
import { lifecycle } from 'recompose';
import { NavLink } from 'react-router-dom';

const Dialog = ({ isLoadMessages }) => {
  const messagesList = isLoadMessages ? (
    'Loading...'
  ) : (
    'Messages'
  );

  return (
    <div>
      <NavLink to="/messages">Back</NavLink>
      {messagesList}
    </div>
  )
};

export default lifecycle({
  componentDidMount() {
    const { peerId, userId, fetchDialogMessages } = this.props;
    fetchDialogMessages(userId, peerId);
  }
})(Dialog);
