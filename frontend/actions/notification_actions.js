export const ADD_FRIEND_REQUESTS = 'ADD_FRIEND_REQUESTS';
export const ADD_ACTIVITY_NOTIFICATIONS = 'ADD_ACTIVITY_NOTIFICATIONS';
export const ADD_MESSAGE_NOTIFICATIONS = 'ADD_MESSAGE_NOTIFICATIONS';
export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';

export const addFriendRequests = requestedFriends => ({
  type: ADD_FRIEND_REQUESTS,
  requestedFriends
});

export const addActivityNotifications = activities => ({
  type: ADD_ACTIVITY_NOTIFICATIONS,
  activities
});

export const addMessageNotifications = messages => ({
  type: ADD_MESSAGE_NOTIFICATIONS,
  messages
});

export const fetchNotifications = () => ({
  type: FETCH_NOTIFICATIONS
});
