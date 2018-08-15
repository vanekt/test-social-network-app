import React from 'react';
import { NavLink } from 'react-router-dom';
import { lifecycle } from 'recompose';

const Profile = ({ profile }) => {
  return (
    <div>
      {profile.username}
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
