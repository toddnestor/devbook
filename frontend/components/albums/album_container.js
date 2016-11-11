import { connect } from 'react-redux';
import Album from './album';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => ({
  album: _.find(state.albums, {id: parseInt(ownProps.params.album_id)}),
  photos: state.photos,
  loading: state.loading.fetchingPhotos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAlbum: () => dispatch(fetchAlbum(ownProps.params.album_id)),
  fetchPhotos: () => dispatch(fetchPhotos(ownProps.params.album_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
