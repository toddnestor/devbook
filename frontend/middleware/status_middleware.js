import { CREATE_STATUS, UPDATE_STATUS, DELETE_STATUS, createdStatus } from '../actions/status_actions';
import { receiveActivity } from '../actions/activity_actions';
import { createStatus } from '../util/status_api';

export default ({ getState, dispatch }) => next => action => {
  const success = activity => {
    dispatch( receiveActivity( activity ) );
    dispatch( createdStatus() );
  };

  const error = xhr => console.log(xhr.responseJSON);

  switch( action.type ) {
    case CREATE_STATUS:
      createStatus( action.wallId, action.status, success, error );
      break;
  }

  return next(action);
};
