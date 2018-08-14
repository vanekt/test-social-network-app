import React from 'react';
import { NavLink } from 'react-router-dom';
import { lifecycle } from 'recompose';

const Profile = ({ user }) => {
  return (
    <div>
      {user.username}
      <NavLink
        to="/messages"
        activeStyle={{
          textDecoration: 'none',
          color: 'black'
        }}
      >
        To messages
      </NavLink>
    </div>
  );
};

export default lifecycle({
  componentDidMount() {
    const { match, fetchProfileUser } = this.props;
    const userId = match.params.userId;
    fetchProfileUser(userId);
  }
})(Profile);
