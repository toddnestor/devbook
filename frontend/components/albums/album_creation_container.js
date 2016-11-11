import { connect } from 'react-redux';
import AlbumCreation from './album_creation';
import { createAlbum } from '../../actions/album_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreation);
