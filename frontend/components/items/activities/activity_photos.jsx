import React from 'react';
import PhotoItem from '../photo_item_container';

const ActivityPhotos = ({ media_items }) => {
  if( media_items.length === 1 ) {
    let photo = media_items[0];

    return (
      <div className="only-photo">
        <PhotoItem photo={{url: photo.urls.large}} />
      </div>
    )
  }

  if( media_items.length < 5 ) {
    return (
      <div className="media-body-inline-grid photos">
        {
          media_items.map( (photo, i) => (
            <PhotoItem key={photo.id}
                       zoomUrl={photo.urls.large}
                       photo={{url: i == 0 || i == 3 ? photo.urls.wide : photo.urls.narrow}} />
          ))
        }
      </div>
    );
  }

  return (
    <div className="image-previews">
      {
        media_items.map( photo => <PhotoItem key={photo.id} photo={{url: photo.urls.large}} />)
      }
    </div>
  );
}

export default ActivityPhotos;
