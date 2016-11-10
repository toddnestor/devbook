import { connect } from 'react-redux';
import SearchUsers from './search_users';
import { searchUsers } from '../../actions/users_actions';

const mapStateToProps = state => ({
  users: state.users.searchResults,
  loading: state.users.searching
});

const mapDispatchToProps = dispatch => ({
  searchUsers: search => dispatch(searchUsers(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchUsers);
