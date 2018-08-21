import React from 'react';
import { lifecycle } from 'recompose';
import { NavLink } from 'react-router-dom';
import Message from '../Message';
import MessageForm from '../MessageForm';
import styles from './Dialog.module.scss';

const Dialog = ({ isLoadMessages, messages, messagesListError }) => {
  const messagesList =
    messages &&
    messages.map((message, index, array) => {
      let onlyMessage = false;
      if (index > 0) {
        onlyMessage = message.authorId === array[index - 1].authorId;
      }
      return <Message key={message.id} data={message} onlyMessage={onlyMessage} />;
    });
  const content = isLoadMessages ? (
    'Loading...'
  ) : (
    <div>
      <div className={styles.messageList}>{messagesList}</div>
      <MessageForm />
    </div>
  );

  return (
    <div className={styles.dialog}>
      <NavLink className={styles.back} to="/messages">
        Back
      </NavLink>
      <p>{messagesListError}</p>
      {content}
    </div>
  );
};

export default lifecycle({
  componentDidMount() {
    const { peerId, userId, fetchDialogMessages } = this.props;
    fetchDialogMessages(userId, peerId);
  }
})(Dialog);
