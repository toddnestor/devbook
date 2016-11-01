import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: session.currentUser ? true : false,
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: location.hash.indexOf('login') > -1 ? 'login' : 'signup',
  processForm: user => {
    let formType = ownProps.location.pathname.indexOf('login') > -1 ? 'login' : 'signup';

    switch( formType ) {
      case 'login':
        dispatch(login(user));
        break;
      case 'signup':
        dispatch(signup(user));
        break;
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
