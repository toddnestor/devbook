import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProfile } from '../../actions/profile_actions';

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: username => dispatch(fetchProfile(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
