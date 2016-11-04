import { connect } from 'react-redux';
import FriendButton from './friend_button';
import { requestFriend,
         cancelRequest,
         blockUser,
         unBlockUser,
         unfriendUser,
         acceptFriendRequest,
         denyFriendRequest } from '../../actions/friend_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestFriend: user => dispatch(requestFriend(user)),
  cancelRequest: user => dispatch(cancelRequest(user)),
  blockUser: user => dispatch(blockUser(user)),
  unBlockUser: user => dispatch(unBlockUser(user)),
  unfriendUser: user => dispatch(unfriendUser(user)),
  acceptFriendRequest: user => dispatch(acceptFriendRequest(user)),
  denyFriendRequest: user => dispatch(denyFriendRequest(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendButton);
