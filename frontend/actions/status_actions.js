export const CREATE_STATUS = 'CREATE_STATUS';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const DELETE_STATUS = 'DELETE_STATUS';
export const CREATED_STATUS = 'CREATED_STATUS';

export const createStatus = (wallId, status) => ({
  type: CREATE_STATUS,
  wallId,
  status
});

export const updateStatus = (status, activity) => ({
  type: UPDATE_STATUS,
  status,
  activity
});

export const deleteStatus = (status, activity) => ({
  type: DELETE_STATUS,
  status,
  activity
});

export const createdStatus = activity => ({
  type: CREATED_STATUS,
  activity
});
