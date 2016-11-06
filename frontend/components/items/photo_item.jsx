import React from 'react';

const PhotoItem = ({ photo, openZoomPhoto, zoomUrl }) => {

  const handleZoomIn = e => {
    e.preventDefault();
    openZoomPhoto(zoomUrl ? zoomUrl : photo.url);
  };

  return (
    <div className="photo-item" onClick={handleZoomIn}>
      <img src={photo.url} />
    </div>
  );
}

export default PhotoItem;
