import { connect } from 'react-redux';
import Posts from './posts';
import { hideOverlay } from '../../actions/overlay_actions';

const mapStateToProps = state => ({
  profile: state.profile,
  overlay: state.overlay
});

const mapDispatchToProps = dispatch => ({
  hideOverlay: () => dispatch(hideOverlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
