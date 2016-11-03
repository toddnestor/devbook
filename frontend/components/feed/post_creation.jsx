import React from 'react';
import Textarea from 'react-textarea-autosize';

const PostCreation = () => {

  return (
    <div className="form-group post-creation clearfix">
      <Textarea type="text" className="form-control" placeholder="Message"></Textarea>
      <div className="controls">
        <button className="btn btn-primary btn-sm">Post</button>
        <button className="btn btn-success btn-sm"><span className="icon icon-camera"></span></button>
      </div>
    </div>
  );
}

export default PostCreation;
