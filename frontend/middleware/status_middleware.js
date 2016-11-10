import { CREATE_STATUS, UPDATE_STATUS, DELETE_STATUS, createdStatus } from '../actions/status_actions';
import { receiveActivity, updateActivity, removeActivity } from '../actions/activity_actions';
import { createStatus, updateStatus, deleteStatus } from '../util/status_api';

export default ({ getState, dispatch }) => next => action => {
  let success = activity => {
    dispatch( receiveActivity( activity ) );
    dispatch( createdStatus( activity ) );
  };

  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case CREATE_STATUS:
      createStatus( action.wallId, action.status, success, error );
      break;
    case UPDATE_STATUS:
      success = () => {
        action.activity.feedable = _.merge({}, action.activity.feedable, action.status);
        dispatch(updateActivity(action.activity));
      };

      updateStatus(action.status, success, error);
      break;
    case DELETE_STATUS:
      success = () => {
        dispatch(removeActivity(action.activity));
      };

      deleteStatus( action.status, success, error );
      break;
  }

  return next(action);
};
