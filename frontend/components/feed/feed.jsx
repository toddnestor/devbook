import React from 'react';
import PostCreationContainer from './post_creation_container';
import ActivityItemContainer from '../items/activity_item_container';

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

  render() {
    let { activities, wallId, overlay, loading } = this.props;

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
        {
          activities.map( activity => <ActivityItemContainer key={activity.id} activity={activity} />)
        }
      </ul>
    );
  }
}

export default Feed;
