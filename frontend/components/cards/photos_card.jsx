import React from 'react';
import AlbumItem from '../items/album_item';
import { Link } from 'react-router';

const PhotosCard = ({ albums = [], user }) => (
  <div className="panel panel-default visible-md-block visible-lg-block photos-card" style={{display: albums.length ? 'block' : 'none'}}>
    <div className="panel-body">
      <h5 className="m-t-0">Albums <small>· <Link to={`/${user.username}/albums`}>View all</Link></small></h5>
      <div>
        {
          albums.map( album => (
            <Link key={album.id} to={`/${user.username}/albums/${album.id}`}>
              <AlbumItem album={album} />
            </Link>
          ))
        }
      </div>
    </div>
  </div>
);

export default PhotosCard;
