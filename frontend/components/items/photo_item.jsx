import React from 'react';

const PhotoItem = ({ photo, openZoomPhoto, zoomUrl, showRemove, removeCb }) => {
  const handleZoomIn = e => {
    e.preventDefault();
    openZoomPhoto(zoomUrl ? zoomUrl : photo.url);
  };

  showRemove = showRemove || false;
  removeCb = removeCb || function() {};

  const handleRemove = e => {
    e.preventDefault();
    e.stopPropagation();
    removeCb();
  }

  return (
    <div className="photo-item" onClick={handleZoomIn}>
      {showRemove ? <span className="handle-remove" onClick={handleRemove}>&times;</span> : ''}
      <img src={photo.url} />
    </div>
  );
}

export default PhotoItem;
