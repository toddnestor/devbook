import React from 'react';
import PostCreationContainer from './post_creation_container';
import ActivityItemContainer from '../items/activity_item_container';
import InfiniteScroll from 'react-infinite-scroller';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if( this.props.wallId ) {
      this.props.fetchFeed();
    }
  }

  componentWillReceiveProps(nextProps) {
    if( (!this.props.wallId && nextProps.wallId) || (this.props.wallId && nextProps.wallId && this.props.wallId != nextProps.wallId) ) {
      nextProps.fetchFeed();
    }
  }

  loadMore(page) {
    this.props.fetchMoreFeed(page);
  }

  render() {
    let { activities, wallId, overlay, loading, hasMore } = this.props;

    if( loading ) {
      return (
        <div className="loading-parent">
          <div className="loader"></div>
        </div>
      );
    }

    return (
        <ul className="list-group media-list media-list-stream feed">
          <li className="media list-group-item p-a" style={{zIndex: overlay ? '1031' : '0'}}>
            <PostCreationContainer wallId={wallId} />
          </li>
          <InfiniteScroll
            pageStart={1}
            initialLoad={false}
            loadMore={this.loadMore.bind(this)}
            hasMore={hasMore}
            loader={<div className="loading-parent"><div className="loader"></div></div>}>
            {
              activities.map( activity => <ActivityItemContainer key={activity.id} activity={activity} />)
            }
          </InfiniteScroll>
          <li className="media list-group-item p-a" style={{display: hasMore || !activities.length ? 'none' : 'list-item'}}>
            <div className="jumbotron">
              <h2 className="text-center">No more to load.</h2>
            </div>
          </li>
          <li className="media list-group-item p-a" style={{display: activities && activities.length ? 'none' : 'list-item'}}>
            <div className="jumbotron">
              <h2 className="text-center">No activity to show.</h2>
            </div>
          </li>
        </ul>
    );
  }
}

export default Feed;
