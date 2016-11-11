import { connect } from 'react-redux';
import AlbumPhotos from './album_photos';

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPhotos);
