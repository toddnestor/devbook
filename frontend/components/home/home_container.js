import { connect } from 'react-redux';
import Home from './home';
import { hideOverlay } from '../../actions/overlay_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  overlay: state.overlay
});

const mapDispatchToProps = dispatch => ({
  hideOverlay: () => dispatch(hideOverlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
