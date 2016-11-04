import { connect } from 'react-redux';
import EditProfile from './edit_profile';
import { updateUser, confirmSaved } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  confirmSaved: () => dispatch(confirmSaved())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( EditProfile );
