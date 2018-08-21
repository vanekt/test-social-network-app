import Profile from './Profile';
import { connect } from 'react-redux';
import { fetchProfileUser } from '../../actions/profile';

const mapStateToProps = state => ({
  username: state.profile.username,
  image: state.profile.image,
  userId: state.profile.id,
  isLoading: state.profile.isLoading,
  error: state.profile.error
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfileUser: userId => {
      dispatch(fetchProfileUser(userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
