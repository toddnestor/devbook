import React from 'react';
import PostCreationContainer from './post_creation_container';
import ActivityItemContainer from '../items/activity_item_container';

const Feed = ({ activities }) => (
  <ul className="list-group media-list media-list-stream feed">
    <li className="media list-group-item p-a">
      <PostCreationContainer />
    </li>
    {
      activities.map( activity => <ActivityItemContainer key={activity.id} activity={activity} />)
    }
  </ul>
);

export default Feed;
