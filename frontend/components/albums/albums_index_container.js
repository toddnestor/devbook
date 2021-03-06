import { connect } from 'react-redux';
import AlbumsIndex from './albums_index';
import { sortedAlbums } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  albums: sortedAlbums(state),
  belongsToCurrentUser: !ownProps.params.username || state.profile.id === state.session.currentUser.id,
  user: ownProps.params.username ? state.profile : state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsIndex);
