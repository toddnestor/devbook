import { RECEIVE_FEED } from '../actions/feed_actions';
import { RECEIVE_ACTIVITY } from '../actions/activity_actions';

const _defaultState = [];
import merge from 'lodash/merge';

const FeedReducer = (state = _defaultState, action) => {
  switch( action.type ) {
    case RECEIVE_FEED:
      return action.feed;
    case RECEIVE_ACTIVITY:
      let duped = merge([], state);
      duped.unshift(action.activity);
      return duped;
    default:
      return state;
  }
}

export default FeedReducer;
