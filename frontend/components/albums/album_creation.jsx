import React from 'react';
import Textarea from 'react-textarea-autosize';
import Upload from '../utilities/upload';
import PhotoItem from '../items/photo_item_container';

class AlbumCreation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      album: {
        title: "",
        description: ""
      },
      mediaItems: []
    }
  }

  handlePostCreate(e) {
    e.preventDefault();
    let album = _.merge({}, this.state.album);
    album.media_item_ids = [""];

    this.state.mediaItems.forEach( item => album.media_item_ids.push(item.id));

    this.props.createAlbum(album);
  }

  update(attribute) {
    return e => {
      this.setState({[attribute]: e.target.value});
    }
  }

  addMedia(mediaItems) {
    let previousMediaItems = _.merge([], this.state.mediaItems);
    mediaItems = previousMediaItems.concat(mediaItems);
    this.setState({mediaItems});
  }

  removeMediaItem(mediaItem) {
    return () => {
      let mediaItems = _.without(this.state.mediaItems, mediaItem);
      this.setState({mediaItems});
    };
  }

  render() {

    return (
      <div className="album-creation">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">Create New Album</h1>
          </div>
          <div className="col-md-offset-3 col-md-6">
            <form className="clearfix">
              <div className="col-sm-12 form-group">
                <input onChange={this.update('title').bind(this)} value={this.state.title} type="text" className="form-control" placeholder="Title" />
              </div>
              <div className="col-sm-12 form-group">
                <Textarea onChange={this.update('description').bind(this)} value={this.state.description} type="text" className="form-control" placeholder="Title" style={{minHeight: '58px'}} />
              </div>
            </form>
          </div>
          <div className="col-md-offset-1 col-md-10 photo-selection">
            {
              this.state.mediaItems.map( item => <PhotoItem key={item.id} showRemove={true} removeCb={this.removeMediaItem(item).bind(this)} photo={{url: item.urls.large}} />)
            }
            <Upload className="upload pointer" callback={this.addMedia.bind(this)} multiple={true}>
              Add Photos
            </Upload>
          </div>
          <div className="col-md-offset-3 col-md-6 clearfix">
            <button onClick={this.handlePostCreate.bind(this)} className="btn btn-success btn-lg green-button sign-up-button pull-right m-b">Create Album</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumCreation;
