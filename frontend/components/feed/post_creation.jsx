import React from 'react';
import Textarea from 'react-textarea-autosize';
import PhotoItem from '../items/photo_item_container';
import Upload from '../utilities/upload';

class PostCreation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: {
        content: ""
      },
      mediaItems: [],
      errors: [],
      focused: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.loading && !nextProps.loading) {
      this.setState({status: {content: ''}, mediaItems: [], errors: []});
      this.props.hideOverlay();
    }
  }

  postCreateFocus(e) {
    e.stopPropagation();
    this.props.showOverlay();
  }

  updateContent(e) {
    let status = _.merge({}, this.state.status);
    status.content = e.target.value;
    this.setState({status});
  }

  addMedia(mediaItems) {
    this.props.showOverlay();
    let previousMediaItems = _.merge([], this.state.mediaItems);
    mediaItems = previousMediaItems.concat(mediaItems);
    this.setState({mediaItems});
  }

  handlePostCreate(e) {
    e.preventDefault();
    let status = _.merge({}, this.state.status);
    status.media_item_ids = [];

    this.state.mediaItems.forEach( item => status.media_item_ids.push(item.id));

    this.props.createStatus(status);
  }

  render() {

    return (
      <div className="form-group post-creation clearfix" onClick={this.postCreateFocus.bind(this)}>
        <Textarea onFocus={this.postCreateFocus.bind(this)}
                  style={{minHeight: '58px'}}
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  onChange={this.updateContent.bind(this)}
                  value={this.state.status.content}></Textarea>
        <div className="image-previews" style={{display: this.state.mediaItems.length ? 'inline-block' : 'none'}}>
          {
            this.state.mediaItems.map( item => <PhotoItem key={item.id} photo={{url: item.urls.large}} /> )
          }
        </div>
        <div className="controls">
          <button onClick={this.handlePostCreate.bind(this)} className="btn btn-primary btn-sm">Post</button>
          <Upload callback={this.addMedia.bind(this)} className="pull-right" multiple={true}>
            <button onClick={this.props.hideOverlay} className="btn btn-success btn-sm"><span className="icon icon-camera"></span></button>
          </Upload>
        </div>
      </div>
    );
  }
}

export default PostCreation;
