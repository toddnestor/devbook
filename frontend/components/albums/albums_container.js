import { connect } from 'react-redux';
import Albums from './albums';
import { fetchAlbums, fetchMyAlbums } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  user: ownProps.params.username ? state.profile : state.session.currentUser,
  loading: state.loading.albums.fetchingMany
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAlbums: id => dispatch( fetchAlbums(id) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
