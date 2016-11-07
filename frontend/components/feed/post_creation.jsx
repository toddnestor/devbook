import React from 'react';
import Textarea from 'react-textarea-autosize';
import PhotoItem from '../items/photo_item_container';
import Upload from '../utilities/upload';

class PostCreation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: {
        content: this.props.content ? this.props.content : ""
      },
      mediaItems: this.props.mediaItems ? this.props.mediaItems : [],
      errors: [],
      focused: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.loading && !nextProps.loading) {
      this.setState({status: {content: ''}, mediaItems: [], errors: []});
      if( this.props.hideOverlay )
        this.props.hideOverlay();
    }
  }

  postCreateFocus(e) {
    e.stopPropagation();
    if( this.props.showOverlay )
      this.props.showOverlay();
  }

  updateContent(e) {
    let status = _.merge({}, this.state.status);
    status.content = e.target.value;
    this.setState({status});
  }

  addMedia(mediaItems) {
    if( this.props.showOverlay )
      this.props.showOverlay();

    let previousMediaItems = _.merge([], this.state.mediaItems);
    mediaItems = previousMediaItems.concat(mediaItems);
    this.setState({mediaItems});
  }

  handlePostCreate(e) {
    e.preventDefault();
    let status = _.merge({}, this.state.status);
    status.media_item_ids = [""];

    this.state.mediaItems.forEach( item => status.media_item_ids.push(item.id));

    this.props.createStatus(status, this.state.mediaItems);
  }

  removeMediaItem(mediaItem) {
    return () => {
      let mediaItems = _.without(this.state.mediaItems, mediaItem);
      this.setState({mediaItems});
    };
  }

  render() {

    return (
      <div className="form-group post-creation clearfix">
        <Textarea onFocus={this.postCreateFocus.bind(this)}
                  style={{minHeight: '58px'}}
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  onChange={this.updateContent.bind(this)}
                  value={this.state.status.content}></Textarea>
        <div className="image-previews" style={{display: this.state.mediaItems.length ? 'inline-block' : 'none'}}>
          {
            this.state.mediaItems.map( item => <PhotoItem key={item.id} showRemove={true} removeCb={this.removeMediaItem(item).bind(this)} photo={{url: item.urls.large}} /> )
          }
        </div>
        <div className="controls">
          <button onClick={this.handlePostCreate.bind(this)} className="btn btn-primary btn-sm">{this.props.submitText || 'Post'}</button>
          <Upload callback={this.addMedia.bind(this)} className="pull-right" multiple={true}>
            <button className="btn btn-success btn-sm"><span className="icon icon-camera"></span></button>
          </Upload>
        </div>
      </div>
    );
  }
}

export default PostCreation;
