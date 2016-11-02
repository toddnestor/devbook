import React from 'react';

const PhotoItem = ({ photo }) => (
  <div className="photo-item">
    <img src={photo.url} />
  </div>
);

export default PhotoItem;
