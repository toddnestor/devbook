import { connect } from 'react-redux';
import Users from './users';
import { fetchUsers } from '../../actions/users_actions';
import { allUsers } from '../../reducers/selectors';

const mapStateToProps = state => ({
  users: allUsers(state),
  loading: state.users.loading
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
