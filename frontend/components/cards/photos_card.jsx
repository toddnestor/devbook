import React from 'react';
import PhotoItem from '../items/photo_item';

const PhotosCard = ({ photos }) => (
  <div className="panel panel-default visible-md-block visible-lg-block photos-card">
    <div className="panel-body">
      <h5 className="m-t-0">Photos <small style={{display: 'none'}}>· <a href="#">Edit</a></small></h5>
      <div>
        {
          photos.map( photo => <PhotoItem key={photo.id} photo={photo} />)
        }
      </div>
    </div>
  </div>
);

export default PhotosCard;
