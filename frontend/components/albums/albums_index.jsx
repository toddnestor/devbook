import React from 'react';
import AlbumItem from '../items/album_item';
import { Link } from 'react-router';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let { albums, belongsToCurrentUser } = this.props;
    return (
      <div>
        <div className="col-md-offset-3 col-md-6 clearfix" style={{display: belongsToCurrentUser ? 'block' : 'none', padding: "0", marginBottom: "15px", height: "inherit"}}>
          <Link to="/albums/new" className="btn btn-success-outline pull-right">Create New Album</Link>
        </div>
        <div style={{display: albums.length ? 'none' : 'block'}} className="col-md-offset-3 col-md-6 jumbotron">
          <h2 className="text-center">No Albums to show.</h2>
        </div>
        <div className="col-md-offset-1 col-md-10">
          {
            albums.map( album => <AlbumItem key={album.id} album={album} /> )
          }
        </div>
      </div>
    );
  }
}

export default AlbumsIndex;
