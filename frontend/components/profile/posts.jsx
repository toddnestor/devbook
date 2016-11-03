import React from 'react';
import ProfileCard from '../cards/profile_card';
import AboutCard from '../cards/about_card';
import PhotosCard from '../cards/photos_card';
import Feed from '../feed/feed';
import Notification from '../items/notification';
import AdCard from '../cards/ad_card';
import FriendsCard from '../cards/friends_card';

import { dummyPhotos, dummyActivities, dummyFriends } from './dummy_content';

const Posts = ({ profile }) => (
  <div className="container p-t-md">
    <div className="col-md-3">
      <ProfileCard user={profile} />
      <AboutCard user={profile} />
      <PhotosCard photos={dummyPhotos} />
    </div>
    <div className="col-md-6">
      <Feed activities={dummyActivities} />
    </div>
    <div className="col-md-3">
      <Notification>
        <strong>Welcome to DevBook!</strong> Check out what your friends are up to.
      </Notification>
      <AdCard imageSrc="https://devbook.objects.cdn.dream.io/media_items/media/000/000/014/original/Alderaan-Hope.jpg?1478204355" cta="Book your ticket" url="http://lmgtfy.com/?q=tickets+to+alderaan">
        <strong>It might be time to visit Alderaan.</strong>
        <p>
          Alderaan is awesome, the fun is explosive, you'll be sure to have a blast!
        </p>
      </AdCard>
      <FriendsCard friends={dummyFriends} />
    </div>
  </div>
);

export default Posts;
