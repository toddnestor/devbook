import React from 'react';
import PhotoItem from '../items/photo_item_container';

const AlbumPhotos = ({ photos }) => {
  let switchCount = 1;
  let timeSinceSwitch = 1;

  const swapSwitchCount = () => {
    if( switchCount == 1 ) {
      switchCount = 5;
    } else {
      switchCount = 1;
    }

    timeSinceSwitch = 0;
  }

  const photoUrl = (photo, index) => {
    let count = index + 1;

    if(timeSinceSwitch == switchCount) {
      swapSwitchCount();
      return photo.urls.wide;
    } else {
      timeSinceSwitch++;
      return photo.urls.narrow;
    }
  }

  return (
    <div>
      {
        photos.map( (photo, i) => (
          <PhotoItem key={photo.id} photo={{url: photoUrl(photo, i)}}  zoomUrl={photo.urls.large} />
        ))
      }
    </div>
  );
}

export default AlbumPhotos;
