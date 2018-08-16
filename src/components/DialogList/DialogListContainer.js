import DialogList from './DialogList';
import { connect } from 'react-redux';
import { fetchDialogs } from '../../actions/messages';

const mapStateToProps = state => ({
  userId: state.user.id,
  dialogs: state.messages.dialogs,
  dialogListError: state.messages.dialogListError
});

const mapDispatchToProps = dispatch => {
  return {
    fetchDialogs: userId => {
      dispatch(fetchDialogs(userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogList);
