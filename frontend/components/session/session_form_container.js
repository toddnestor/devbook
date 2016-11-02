import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, demoLogin } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: session.currentUser ? true : false,
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  demoLogin: () => dispatch(demoLogin()),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
