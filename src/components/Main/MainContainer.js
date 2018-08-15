import Main from './Main';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  userId: state.user.userId
});

export default connect(mapStateToProps)(Main);
