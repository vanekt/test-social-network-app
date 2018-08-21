import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Message.module.scss';

const Message = ({ data, datetime, authorId, authorName, authorImage, onlyMessage }) => (
  <div className={cn(styles.message, { [styles.onlyMessage]: onlyMessage })}>
    <img
      src={authorImage}
      className={cn(styles.avatar, { [styles.avatarHidden]: onlyMessage })}
      alt={authorName}
    />
    <div className={styles.messageBody}>
      {onlyMessage ? null : (
        <p className={styles.author}>
          <NavLink to={`/profile/${authorId}`} className={styles.authorName}>
            {authorName}
          </NavLink>
          <span className={styles.datetime}>{datetime}</span>
        </p>
      )}

      <div className={styles.text}>{data.text}</div>
    </div>
  </div>
);

export default Message;
