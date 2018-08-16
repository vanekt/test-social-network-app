import Dialog from './Dialog';
import { connect } from 'react-redux';
import { fetchDialogMessages } from '../../actions/messages';

const mapStateToProps = state => ({
  userId: state.user.id,
  messages: state.messages.messages,
  messagesListError: state.messages.messagesListError,
  isLoadMessages: state.messages.isLoadMessages
});

const mapDispatchToProps = dispatch => {
  return {
    fetchDialogMessages: (userId, peerId) => {
      dispatch(fetchDialogMessages({ userId, peerId }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog);
