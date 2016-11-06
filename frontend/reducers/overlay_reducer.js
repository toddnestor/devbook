import { SHOW_OVERLAY, HIDE_OVERLAY } from '../actions/overlay_actions';

const _defaultState = false;
import merge from 'lodash/merge';

const OverlayReducer = (state = _defaultState, action) => {
  switch( action.type ) {
    case SHOW_OVERLAY:
      return true;
    case HIDE_OVERLAY:
      return false;
    default:
      return state;
  }
}

export default OverlayReducer;
