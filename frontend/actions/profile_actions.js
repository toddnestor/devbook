export const FETCH_PROFILE = 'FETCH_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export const fetchProfile = username => ({
  type: FETCH_PROFILE,
  username
});

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});
