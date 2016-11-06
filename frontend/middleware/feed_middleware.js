import { FETCH_FEED, receiveFeed } from '../actions/feed_actions';
import { fetchFeed } from '../util/feed_api';

export default ({ getState, dispatch }) => next => action => {
  const success = feed => {
    dispatch( receiveFeed( feed ) );
  };

  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case FETCH_FEED:
      fetchFeed( action.wallId, success, error );
      break;
  }

  return next(action);
};
