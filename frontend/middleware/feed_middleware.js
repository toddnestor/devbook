import { FETCH_FEED, FETCH_MORE_FEED, receiveFeed, receiveAdditionalFeed } from '../actions/feed_actions';
import { fetchFeed, fetchMoreFeed } from '../util/feed_api';

export default ({ getState, dispatch }) => next => action => {
  let success = feed => {
    dispatch( receiveFeed( feed ) );
  };

  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case FETCH_FEED:
      fetchFeed( action.wallId, success, error );
      break;
    case FETCH_MORE_FEED:
      let created = getState().feed.created;

      success = feed => {
        dispatch( receiveAdditionalFeed( feed ) );
      };

      fetchMoreFeed( action.wallId, action.page, created, success, error );
      break;
  }

  return next(action);
};
