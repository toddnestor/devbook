export const FETCH_PROFILE = 'FETCH_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const FETCH_PROFILE_FRIENDS = 'FETCH_PROFILE_FRIENDS';
export const RECEIVE_PROFILE_FRIENDS = 'RECEIVE_PROFILE_FRIENDS';

export const fetchProfile = username => ({
  type: FETCH_PROFILE,
  username
});

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});

export const fetchProfileFriends = id => ({
  type: FETCH_PROFILE_FRIENDS,
  id
});

export const receiveProfileFriends = friends => ({
  type: RECEIVE_PROFILE_FRIENDS,
  friends
});
