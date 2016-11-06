import React from 'react';
import ProfileCard from '../cards/profile_card';
import AboutCard from '../cards/about_card';
import PhotosCard from '../cards/photos_card';
import Feed from '../feed/feed_container';
import Notification from '../items/notification';
import AdCard from '../cards/ad_card';
import FriendsCard from '../cards/friends_card';

import { dummyPhotos } from './dummy_content';

const Posts = ({ profile, overlay, hideOverlay }) => (
  <div className="container p-t-md">
    <div className="col-md-3">
      <ProfileCard user={profile} />
      <AboutCard user={profile} />
      <PhotosCard photos={dummyPhotos} />
    </div>
    <div className="col-md-6">
      <Feed wallId={profile.id} />
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
      <FriendsCard friends={profile.friends || []} user={profile} />
    </div>
    <div onClick={hideOverlay} className={overlay ? "zoom-overlay pointer-events" : "zoom-overlay"} style={{opacity: overlay ? '0.8' : '0', zIndex: '1030'}}></div>
  </div>
);

export default Posts;
