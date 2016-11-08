import React from 'react';
import Textarea from 'react-textarea-autosize';
import PhotoItem from '../items/photo_item_container';
import Upload from '../utilities/upload';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {
        text: this.props.text ? this.props.text : ""
      },
      mediaItem: this.props.mediaItem ? this.props.mediaItem : null
    };
  }

  updateContent(e) {
    let comment = _.merge({}, this.state.comment);
    comment.text = e.target.value;
    this.setState({comment});
  }

  addMedia(mediaItems) {
    this.setState({mediaItem: mediaItems[0]});
  }

  handleCommentCreate(e) {
    e.preventDefault();

    if( this.state.mediaItem ) {
      this.state.comment.media_item_ids = [this.state.mediaItem.id];
    }

    this.props.createComment(this.state.comment, this.state.mediaItem);
    this.setState({comment: {text: ""}, mediaItem: null});
  }

  render() {
    let { user } = this.props;

    return (
      <div className="form-group post-creation media clearfix m-t-md">
        <div className="media-left">
          <img className="media-object" style={{borderRadius: '6px', maxWidth: '40px'}} src={user.avatar_url} />
        </div>
        <div className="media-body">
          <Textarea type="text"
                    className="form-control"
                    placeholder="Write a comment..."
                    onChange={this.updateContent.bind(this)}
                    value={this.state.comment.text}></Textarea>
                  <div className="image-preview m-t" style={{display: this.state.mediaItem ? 'inline-block' : 'none'}}>
            {this.state.mediaItem ? <PhotoItem showRemove={true} removeCb={() => this.setState({mediaItem: null})} photo={{url: this.state.mediaItem.urls.large}} /> : ''}
          </div>
          <div className="controls">
            <button onClick={this.handleCommentCreate.bind(this)} className="btn btn-primary btn-xs">{this.props.buttonText ? this.props.buttonText : "Comment"}</button>
            <Upload callback={this.addMedia.bind(this)} className={this.state.mediaItem ? 'hidden' : 'pull-right'} multiple={false}>
              <button className="btn btn-success btn-xs"><span className="icon icon-camera"></span></button>
            </Upload>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentForm;
