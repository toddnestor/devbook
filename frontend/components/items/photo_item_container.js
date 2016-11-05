import { connect } from 'react-redux';
import PhotoItem from './photo_item';
import { openZoomPhoto, closeZoomPhoto } from '../../actions/zoom_photo_actions';

const mapStateToProps = ({ zoomPhoto }) => ({

});

const mapDispatchToProps = dispatch => ({
  openZoomPhoto: imageSrc => dispatch(openZoomPhoto(imageSrc))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoItem);
