import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import styles from './MessageForm.module.scss';

const MessageForm = ({ messageText, updateMessageText, sendMessageAndClean }) => (
  <div className={styles.form}>
    <textarea
      autoFocus
      value={messageText}
      onChange={e => {
        updateMessageText(e.target.value);
      }}
      onKeyPress={e => {
        if (e.key === 'Enter') {
          if (e.ctrlKey) {
            updateMessageText(messageText + '\n');
          } else if (!e.shiftKey) {
            e.preventDefault();
            sendMessageAndClean();
          }
        }
      }}
    />
    <button onClick={sendMessageAndClean}>Send</button>
  </div>
);

const enhance = compose(
  withState('messageText', 'updateMessageText', ''),
  withHandlers({
    sendMessageAndClean: props => e => {
      const { messageText, sendMessage, updateMessageText, authorId, peerId } = props;
      sendMessage({ text: messageText, authorId, peerId });
      updateMessageText('');
    }
  })
);

export default enhance(MessageForm);
