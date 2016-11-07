import { RECEIVE_FEED } from '../actions/feed_actions';
import { RECEIVE_ACTIVITY, UPDATE_ACTIVITY, REMOVE_ACTIVITY } from '../actions/activity_actions';
import { UPDATE_FRIENDSHIP_STATUS } from '../actions/friend_actions';

const _defaultState = [];
import merge from 'lodash/merge';

const FeedReducer = (state = _defaultState, action) => {
  let duped = merge([], state);

  switch( action.type ) {
    case RECEIVE_FEED:
      return action.feed;
    case RECEIVE_ACTIVITY:
      duped.unshift(action.activity);
      return duped;
    case UPDATE_FRIENDSHIP_STATUS:
      duped = duped.map( activity => {
        if( activity.user.id === action.user.id) {
          activity.user.friend_status = action.status;
          activity.user.friend_count++;
        }

        if( activity.wall_user && activity.wall_user.id === action.user.id) {
          activity.wall_user.friend_status = action.status;
          activity.wall_user.friend_count++;
        }

        return activity;
      });

      return duped;
    case UPDATE_ACTIVITY:
      duped = duped.map( activity => {
        if( activity.id === action.activity.id) {
          activity = action.activity;
        }

        return activity;
      });
      return duped;
    case REMOVE_ACTIVITY:
      let activityToRemove = _.find(duped, {id: action.activity.id});
      
      if( activityToRemove ) {
        duped = _.without(duped, activityToRemove);
      }
      return duped;
    default:
      return state;
  }
}

export default FeedReducer;
