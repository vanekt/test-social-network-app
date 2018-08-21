import React from 'react';
import { NavLink } from 'react-router-dom';
import { lifecycle } from 'recompose';
import styles from './DialogList.module.scss';

const DialogList = ({ dialogs, dialogListError, isLoadDialogs }) => {
  const dialogList = isLoadDialogs
    ? 'Loading...'
    : dialogs &&
      dialogs.map(dialog => (
        <NavLink key={dialog.peerId} to={`/messages/${dialog.peerId}`} className={styles.dialog}>
          <img
            src={dialog.image}
            alt={dialog.username}
            title={dialog.username}
            className={styles.avatar}
          />
          <div className={styles.dialogWrapper}>
            <p className={styles.username}>{dialog.username}</p>
          </div>
        </NavLink>
      ));

  return (
    <div className={styles.dialogList}>
      {dialogList}
      {dialogListError ? <span className={styles.error}>{dialogListError}</span> : null}
    </div>
  );
};

export default lifecycle({
  componentDidMount() {
    const { userId, fetchDialogs } = this.props;
    fetchDialogs(userId);
  }
})(DialogList);
