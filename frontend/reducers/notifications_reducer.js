import { ADD_FRIEND_REQUESTS,
         ADD_ACTIVITY_NOTIFICATIONS,
         ADD_MESSAGE_NOTIFICATIONS } from '../actions/notification_actions';
import { UPDATE_FRIENDSHIP_STATUS } from '../actions/friend_actions';
import merge from 'lodash/merge';

const _defaultState = {
  requestedFriends: [],
  messages: [],
  activities: []
};


const NotificationsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let duped = merge({}, state);

  switch( action.type ) {
    case ADD_FRIEND_REQUESTS:
      action.requestedFriends.forEach( request => {
        let existing = _.find(duped.requestedFriends, {id: request.id});
        if( !existing ) {
          duped.requestedFriends.unshift(request);
        }
      });
      return duped;
    case ADD_ACTIVITY_NOTIFICATIONS:
      duped.activities.concat(action.activities);
      return duped;
    case ADD_MESSAGE_NOTIFICATIONS:
      duped.messages.concat(action.messages);
      return duped;
    case UPDATE_FRIENDSHIP_STATUS:
      if(action.status != 'requested') {
        let requestToDelete = null;

        duped.requestedFriends.forEach( request => {
          if(request.user.id === action.user.id) {
            requestToDelete = request;
          }
        });

        if( requestToDelete ) {
          duped.requestedFriends = _.without( duped.requestedFriends, requestToDelete );
        }
      }
      return duped;
    default:
      return state;
  }
}

export default NotificationsReducer;
