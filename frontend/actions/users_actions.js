export const FETCH_USERS = 'FETCH_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SEARCH_USERS = 'SEARCH_USERS';
export const RECEIVE_FOUND_USERS = 'RECEIVE_FOUND_USERS';

export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const searchUsers = search => ({
  type: SEARCH_USERS,
  search
});

export const receiveFoundUsers = users => ({
  type: RECEIVE_FOUND_USERS,
  users
});
