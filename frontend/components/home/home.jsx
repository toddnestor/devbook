import React from 'react';
import ProfileCard from '../cards/profile_card';
import AboutCard from '../cards/about_card';

import Notification from '../items/notification';
import AdCard from '../cards/ad_card';

const Home = ({ currentUser }) => (
  <div className="container p-t-md">
    <div className="col-md-3">
      <ProfileCard user={currentUser} />
      <AboutCard user={currentUser} />
    </div>
    <div className="col-md-6">
    </div>
    <div className="col-md-3">
      <Notification>
        <strong>Welcome to DevBook!</strong> Check out what your friends are up to.
      </Notification>
      <AdCard imageSrc="http://devbook.objects.cdn.dream.io/images/instagram_2.jpg" cta="Buy a ticket">
        <strong>It might be time to visit Iceland.</strong>
        Iceland is so chill, and everything looks cool here. Also, we heard the people are pretty nice. What are you waiting for?
      </AdCard>
    </div>
  </div>
);

export default Home;
