import React from 'react';
import ProfileCard from '../cards/profile_card';
import AboutCard from '../cards/about_card';
import PhotosCard from '../cards/photos_card';
import Feed from '../feed/feed';
import Notification from '../items/notification';
import AdCard from '../cards/ad_card';
import FriendsCard from '../cards/friends_card';
import ProfileHeader from './profile_header';

const dummyPhotos = [
  {
    id: 1,
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_5.jpg',
    title: 'Random Photo 1',
    caption: 'Something something something'
  },
  {
    id: 2,
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_6.jpg',
    title: 'Random Photo 2',
    caption: 'Something something something'
  },
  {
    id: 3,
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_7.jpg',
    title: 'Random Photo 3',
    caption: 'Something something something'
  },
  {
    id: 4,
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_8.jpg',
    title: 'Random Photo 4',
    caption: 'Something something something'
  },
  {
    id: 5,
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_9.jpg',
    title: 'Random Photo 5',
    caption: 'Something something something'
  },
  {
    id: 6,
    url: 'http://devbook.objects.cdn.dream.io/images/instagram_10.jpg',
    title: 'Random Photo 6',
    caption: 'Something something something'
  }
];

const dummyFriends = [
  {
    id: 1,
    fname: 'Leia',
    lname: 'Organa',
    username: 'leia',
    are_friends: true,
    avatar_url: 'http://devbook.objects.cdn.dream.io/images/1fdc19815a210d0317ef2bf998f4200e.jpg'
  },
  {
    id: 2,
    fname: 'Chewbacca',
    lname: '',
    username: 'chewie',
    are_friends: false,
    avatar_url: 'http://devbook.objects.cdn.dream.io/images/Chewbacca-2-.jpg'
  }
];

const dummyActivities = [
  {
    id: 1,
    user: dummyFriends[0],
    time_ago: '4 min',
    text: 'Alcatra cow flank swine. Ground round short loin andouille kevin frankfurter kielbasa. Tenderloin prosciutto porchetta flank ground round. Venison tri-tip leberkas meatloaf, ground round bacon kevin frankfurter sirloin ham tenderloin brisket hamburger andouille swine',
    photos: [
      {
        id: 1,
        url: 'http://devbook.objects.cdn.dream.io/images/unsplash_1.jpg'
      },
      {
        id: 2,
        url: 'http://devbook.objects.cdn.dream.io/images/instagram_1.jpg'
      },
      {
        id: 3,
        url: 'http://devbook.objects.cdn.dream.io/images/instagram_13.jpg'
      },
      {
        id: 4,
        url: 'http://devbook.objects.cdn.dream.io/images/unsplash_2.jpg'
      }
    ],
    comments: [
      {
        id: 1,
        user: dummyFriends[0],
        text: 'Andouille beef tri-tip rump cupim, porchetta cow swine.'
      },
      {
        id: 2,
        user: dummyFriends[1],
        text: 'Brisket bresaola alcatra beef leberkas chuck jowl, sausage drumstick pig. Filet mignon shank short loin jerky sausage ham hock, corned beef ball tip porchetta frankfurter tail swine beef ribs short ribs turkey.'
      }
    ]
  },
  {
    id: 2,
    user: dummyFriends[1],
    time_ago: '12 min',
    text: 'Chicken meatloaf shoulder ball tip drumstick, tri-tip pork loin cupim landjaeger turkey frankfurter sirloin meatball. Kevin turducken porchetta, ball tip ground round short loin shankle beef shoulder tail frankfurter pastrami fatback. Filet mignon meatloaf brisket, leberkas t-bone ham ribeye drumstick porchetta flank jowl kielbasa. Bresaola sausage leberkas pork chop swine. Pork loin ham short loin turducken turkey pork belly. Short ribs turducken pork belly picanha bresaola, shankle brisket ham hock bacon pastrami swine andouille drumstick sirloin turkey. Tri-tip pork loin hamburger short loin brisket doner, capicola pig bacon.'
  }
];

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProfile(this.props.params.username);
  }

  render() {
    let { profile } = this.props;

    return (
      <div className="profile-page">
        <ProfileHeader profile={profile} />
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
      </div>
    );
  }
}

export default Profile;
