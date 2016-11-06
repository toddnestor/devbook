import { connect } from 'react-redux';
import PostCreation from './post_creation';
import { createStatus } from '../../actions/status_actions';
import { showOverlay, hideOverlay } from '../../actions/overlay_actions';

const mapStateToProps = state => ({
  loading: state.loading.createStatus
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createStatus: (status) => dispatch(createStatus(ownProps.wallId, status)),
  showOverlay: () => dispatch(showOverlay()),
  hideOverlay: () => dispatch(hideOverlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCreation);
