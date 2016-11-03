import React from 'react';
import PhotoItem from '../items/photo_item';
// import Masonry from 'react-masonry-component';//undecided if I want this

import { dummyPhotos } from './dummy_content';

let moreDummyPhotos = dummyPhotos.concat(dummyPhotos).concat(dummyPhotos).concat(dummyPhotos);
console.log(moreDummyPhotos);

const Photos = ({ profile }) => (
  <div className="container m-y-md profile-photos">
    {
      moreDummyPhotos.map((photo, i) => <PhotoItem key={i} photo={photo} />)
    }
  </div>
);

export default Photos;