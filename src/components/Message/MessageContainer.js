import Message from './Message';
import { connect } from 'react-redux';
import moment from 'moment';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.user.id;
  const authorId = ownProps.data.authorId;
  const authorName =
    currentUserId === authorId ? state.user.name : state.messages.peerUserData.fullname;
  const authorImage =
    currentUserId === authorId ? state.user.image : state.messages.peerUserData.image;

  const dt = moment(ownProps.data.datetime * 1000);
  return {
    userId: currentUserId,
    authorId,
    authorName,
    authorImage,
    datetime: dt.toNow()
  };
};

export default connect(mapStateToProps)(Message);
