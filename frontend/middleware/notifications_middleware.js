import { FETCH_NOTIFICATIONS,
         addFriendRequests,
         addActivityNotifications,
         addMessageNotifications} from '../actions/notification_actions';
import { fetchNotifications } from '../util/notifications_api';

const params = {};
let fetching = false;

export default ({ getState, dispatch }) => next => action => {
  const success = notifications => {
    fetching = false;
    if( notifications.requestedFriends ) {
      dispatch(addFriendRequests(notifications.requestedFriends));
      let highest = 0;

      notifications.requestedFriends.forEach( request => {
        if( request.id > highest ) {
          highest = request.id;
        }
      });

      params.last_friend_request_id = highest;
    }
  };
  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case FETCH_NOTIFICATIONS:
      if( !fetching ) {
        fetching = true;
        fetchNotifications( params, success, error );
      }
      break;
  }

  return next(action);
};
