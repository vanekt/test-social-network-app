import Message from './Message';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.user.id;
  const authorId = ownProps.data['author_id'];
  const authorName = currentUserId === authorId ? state.user.name : state.messages.peerUserData.fullname;
  const authorImage = currentUserId === authorId ? state.user.image : state.messages.peerUserData.image;

  return {
    userId: currentUserId,
    authorName,
    authorImage
  };
};

export default connect(
  mapStateToProps
)(Message);
