import MessageForm from './MessageForm';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messages';

const mapStateToProps = state => ({
  authorId: state.user.id,
  peerId: state.messages.peerUserData.id
});

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: payload => {
      dispatch(sendMessage(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
