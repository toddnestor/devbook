import { connect } from 'react-redux';
import Friends from './friends';
import { fetchProfileFriends } from '../../actions/profile_actions';

const mapStateToProps = ({profile}) => ({
  profile
});

const mapDispatchToProps = dispatch => ({
  fetchProfileFriends: id => dispatch(fetchProfileFriends(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
