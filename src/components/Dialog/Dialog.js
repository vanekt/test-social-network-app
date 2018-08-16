import React from 'react';
import { lifecycle } from 'recompose';
import { NavLink } from 'react-router-dom';
import Message from '../Message';
import MessageForm from '../MessageForm';

const Dialog = ({ isLoadMessages, messages, messagesListError }) => {
  const messagesList = isLoadMessages ? (
    'Loading...'
  ) : (
    <div>
      {messages && messages.map(message => <Message key={message.id} data={message} />)}
      <MessageForm />
    </div>
  );

  return (
    <div>
      <NavLink to="/messages">Back</NavLink>
      <p>{messagesListError}</p>
      {messagesList}
    </div>
  );
};

export default lifecycle({
  componentDidMount() {
    const { peerId, userId, fetchDialogMessages } = this.props;
    fetchDialogMessages(userId, peerId);
  }
})(Dialog);
