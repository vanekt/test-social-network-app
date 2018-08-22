import React from 'react';
import { NavLink } from 'react-router-dom';
import { lifecycle } from 'recompose';
import Friend from '../Friend';
import styles from './Profile.module.scss';
import avatarPlaceholder from '../../img/avatar.jpg';

const Profile = ({ username, image, userId, isLoading, error, friends }) => {
  if (error) {
    return <div>{error}</div>;
  }

  const userAvatar = image ? image : avatarPlaceholder;
  return isLoading ? (
    'Loading...'
  ) : (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src={userAvatar} alt={username} title={username} />

        <NavLink to={`/messages/${userId}`} className={styles.sendMessageBtn}>
          Send message
        </NavLink>
      </div>
      <div className={styles.content}>
        <div className={styles.userInfo}>
          <span className={styles.status}>Online</span>
          <p className={styles.username}>{username}</p>
        </div>
        <div className={styles.friends}>
          <p className={styles.friendsTitle}>Friends</p>
          {friends.map(friend => {
            return <Friend key={friend.id} data={friend} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default lifecycle({
  componentDidMount() {
    const { match, fetchProfileUser, fetchFriends } = this.props;
    const userId = match.params.userId;
    fetchProfileUser(userId);
    fetchFriends(userId);
  },
  componentWillReceiveProps(nextProps) {
    const { fetchProfileUser, fetchFriends } = this.props;
    const userId = nextProps.match.params.userId;
    fetchProfileUser(userId);
    fetchFriends(userId);
  }
})(Profile);
