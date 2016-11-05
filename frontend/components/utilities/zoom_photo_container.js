import { connect } from 'react-redux';
import ZoomPhoto from './zoom_photo';
import { openZoomPhoto, closeZoomPhoto } from '../../actions/zoom_photo_actions';

const mapStateToProps = ({ zoomPhoto }) => ({
  zoomPhoto
});

const mapDispatchToProps = dispatch => ({
  closeZoomPhoto: () => dispatch(closeZoomPhoto())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZoomPhoto);
