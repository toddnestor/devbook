import { connect } from 'react-redux';
import Feed from './feed';
import { fetchFeed, fetchMoreFeed } from '../../actions/feed_actions';

const mapStateToProps = state => ({
  activities: state.feed.activities,
  hasMore: state.feed.hasMore,
  loading: state.loading.fetchFeed,
  overlay: state.overlay
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: () => dispatch(fetchFeed(ownProps.wallId)),
  fetchMoreFeed: page => dispatch(fetchMoreFeed(ownProps.wallId, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
