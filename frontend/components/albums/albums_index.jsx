import React from 'react';
import AlbumItem from '../items/album_item';
import { Link } from 'react-router';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let { albums, belongsToCurrentUser, user } = this.props;
    return (
      <div className="album-list clearfix">
        <Link to="/albums/new" className="btn btn-success-outline create-button" style={{display: belongsToCurrentUser ? 'block' : 'none'}}>Create New Album</Link>
        <div className="col-md-offset-3 col-md-6 clearfix" style={{padding: "0", marginBottom: "15px", height: "inherit"}}>
          <h1 className="text-center">
            Albums
          </h1>
        </div>
        <div style={{display: albums.length ? 'none' : 'block'}} className="col-md-offset-3 col-md-6 jumbotron">
          <h2 className="text-center">No Albums to show.</h2>
        </div>
        <div className="col-md-12 text-center">
          {
            albums.map( album => (
              <Link key={album.id} to={`/${user.username}/albums/${album.id}`}>
                <AlbumItem album={album} />
              </Link>
            ))
          }
        </div>
      </div>
    );
  }
}

export default AlbumsIndex;
