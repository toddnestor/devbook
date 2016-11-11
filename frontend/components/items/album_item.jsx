import React from 'react';

const AlbumItem = ({ album }) => {

  return (
    <div className="album-item pos-r">
      <div className="album-title">{album.title} ({album.photos_count} photos)</div>
      <img className="img-thumbnail" src={album.cover.urls.square} />
    </div>
  );
}

export default AlbumItem;
