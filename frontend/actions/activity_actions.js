export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';

export const receiveActivity = activity => ({
  type: RECEIVE_ACTIVITY,
  activity
});

export const updateActivity = activity => ({
  type: UPDATE_ACTIVITY,
  activity
});

export const removeActivity = activity => ({
  type: REMOVE_ACTIVITY,
  activity
});
