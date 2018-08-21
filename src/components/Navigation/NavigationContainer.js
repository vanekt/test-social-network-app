import Navigation from './Navigation';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  userId: state.user.id
});

export default connect(mapStateToProps)(Navigation);
