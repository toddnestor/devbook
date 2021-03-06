export const dummyPhotos = [
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

export const dummyFriends = [
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

export const dummyActivities = [
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
