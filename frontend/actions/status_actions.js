export const CREATE_STATUS = 'CREATE_STATUS';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const DELETE_STATUS = 'DELETE_STATUS';
export const CREATED_STATUS = 'CREATED_STATUS';

export const createStatus = (wallId, status) => ({
  type: CREATE_STATUS,
  wallId,
  status
});

export const updateStatus = status => ({
  type: UPDATE_STATUS,
  status
});

export const deleteStatus = status => ({
  type: DELETE_STATUS,
  status
});

export const createdStatus = () => ({
  type: CREATED_STATUS
});
