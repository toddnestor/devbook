import { connect } from 'react-redux';
import ProfileMenu from './profile_menu';
import { logout } from '../../actions/session_actions';
import { fetchNotifications } from '../../actions/notification_actions';
import { acceptFriendRequest, denyFriendRequest } from '../../actions/friend_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  requestedFriends: state.notifications.requestedFriends
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotifications: () => dispatch(fetchNotifications()),
  acceptFriendRequest: user => dispatch(acceptFriendRequest(user)),
  denyFriendRequest: user => dispatch(denyFriendRequest(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileMenu);
