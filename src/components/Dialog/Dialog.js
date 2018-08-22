import React from 'react';
import { compose, lifecycle, withHandlers } from 'recompose';
import { NavLink } from 'react-router-dom';
import Message from '../Message';
import MessageForm from '../MessageForm';
import styles from './Dialog.module.scss';

const Dialog = ({ isLoadMessages, messages, messagesListError, registerChild }) => {
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
      <div ref={registerChild} className={styles.messageList}>
        {messagesList}
      </div>
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

const enhance = compose(
  withHandlers(() => {
    let ref_;
    return {
      registerChild: () => ref => {
        ref_ = ref;
      },
      scrollToBottom: () => () => {
        if (ref_) {
          ref_.scrollTop = ref_.scrollHeight;
        }
      }
    };
  }),
  lifecycle({
    componentDidMount() {
      const { peerId, userId, fetchDialogMessages } = this.props;
      fetchDialogMessages(userId, peerId);
    },
    componentWillReceiveProps(nextProps) {
      // TODO don't scroll to bottom if already scrolled top
      const { messages, scrollToBottom } = this.props;
      if (messages.length !== nextProps.messages.length) {
        setTimeout(() => {
          scrollToBottom();
        }, 0);
      }
    }
  })
);

export default enhance(Dialog);
