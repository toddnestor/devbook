import { connect } from 'react-redux';
import StatusActions from './status_actions';
import { updateStatus, deleteStatus } from '../../../actions/status_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateStatus: (status, activity) => dispatch(updateStatus(status, activity)),
  deleteStatus: (status, activity) => dispatch(deleteStatus(status, activity))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusActions);
