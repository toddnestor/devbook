import React from 'react';

const PostCreation = () => {

  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Message" />
      <div className="input-group-btn">
        <button type="button" className="btn btn-default">
          <span className="icon icon-camera"></span>
        </button>
      </div>
    </div>
  );
}

export default PostCreation;
