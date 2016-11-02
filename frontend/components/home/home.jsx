import React from 'react';
import ProfileCard from '../cards/profile_card';
import AboutCard from '../cards/about_card';
import PhotosCard from '../cards/photos_card';

import Notification from '../items/notification';
import AdCard from '../cards/ad_card';
import FriendsCard from '../cards/friends_card';

const dummyPhotos = [
  {
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_5.jpg',
    title: 'Random Photo 1',
    caption: 'Something something something'
  },
  {
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_6.jpg',
    title: 'Random Photo 2',
    caption: 'Something something something'
  },
  {
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_7.jpg',
    title: 'Random Photo 3',
    caption: 'Something something something'
  },
  {
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_8.jpg',
    title: 'Random Photo 4',
    caption: 'Something something something'
  },
  {
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_9.jpg',
    title: 'Random Photo 5',
    caption: 'Something something something'
  },
  {
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_10.jpg',
    title: 'Random Photo 6',
    caption: 'Something something something'
  }
];

const dummyFriends = [
  {
    fname: 'Leia',
    lname: 'Organa',
    username: 'leia',
    are_friends: true,
    avatar_url: 'http://devbook.objects.cdn.dream.io/images/1fdc19815a210d0317ef2bf998f4200e.jpg'
  },
  {
    fname: 'Chewbacca',
    lname: '',
    username: 'chewie',
    are_friends: false,
    avatar_url: 'http://devbook.objects.cdn.dream.io/images/Chewbacca-2-.jpg'
  }
];

const Home = ({ currentUser }) => (
  <div className="container p-t-md">
    <div className="col-md-3">
      <ProfileCard user={currentUser} />
      <AboutCard user={currentUser} />
      <PhotosCard photos={dummyPhotos} />
    </div>
    <div className="col-md-6">
    </div>
    <div className="col-md-3">
      <Notification>
        <strong>Welcome to DevBook!</strong> Check out what your friends are up to.
      </Notification>
      <AdCard imageSrc="http://devbook.objects.cdn.dream.io/images/instagram_2.jpg" cta="Buy a ticket" url="http://google.com">
        <strong>It might be time to visit Iceland.</strong>
        <p>
          Iceland is so chill, and everything looks cool here. Also, we heard the people are pretty nice. What are you waiting for?
        </p>
      </AdCard>
      <FriendsCard friends={dummyFriends} />
    </div>
  </div>
);

export default Home;
