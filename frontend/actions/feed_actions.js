export const FETCH_FEED = 'FETCH_FEED';
export const RECEIVE_FEED = 'RECEIVE_FEED';

export const fetchFeed = wallId => ({
  type: FETCH_FEED,
  wallId
});

export const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});
