import Profile from './Profile';
import { connect } from 'react-redux';
import { fetchProfileUser } from '../../actions/profile';

const mapStateToProps = state => ({
  user: state.profile
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
