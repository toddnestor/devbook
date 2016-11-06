import { connect } from 'react-redux';
import Feed from './feed';
import { fetchFeed } from '../../actions/feed_actions';

const mapStateToProps = state => ({
  activities: state.feed,
  loading: state.loading.fetchFeed
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: () => dispatch(fetchFeed(ownProps.wallId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
