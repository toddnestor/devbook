export const FETCH_FEED = 'FETCH_FEED';
export const FETCH_MORE_FEED = 'FETCH_MORE_FEED';
export const RECEIVE_FEED = 'RECEIVE_FEED';
export const RECEIVE_ADDITIONAL_FEED = 'RECEIVE_ADDITIONAL_FEED';

export const fetchFeed = wallId => ({
  type: FETCH_FEED,
  wallId
});

export const fetchMoreFeed = (wallId, page) => ({
  type: FETCH_MORE_FEED,
  wallId,
  page
});

export const receiveFeed = activities => ({
  type: RECEIVE_FEED,
  activities
});

export const receiveAdditionalFeed = activities => ({
  type: RECEIVE_ADDITIONAL_FEED,
  activities
});
