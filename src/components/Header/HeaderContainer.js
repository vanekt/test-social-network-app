import Header from './Header';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions/user';

const mapStateToProps = state => ({
  userId: state.user.userId
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logoutRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
