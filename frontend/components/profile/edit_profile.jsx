import React from 'react';
import EditProfileForm from './edit_profile_form';
import Upload from '../utilities/upload';

const EditProfile = ({ currentUser, updateUser, errors }) => {

  return (
    <div className="container p-t-md">
      <div className="col-md-12 edit-profile">
        <div className="row">
          <div className="col-md-2">
            <h3>Avatar</h3>
            <Upload>
              <img src={currentUser.avatar_url} className="img-responsive img-thumbnail edit-avatar" />
              <span className="click-help-text">(Click to change)</span>
            </Upload>
            <h3>Cover Image</h3>
            <Upload>
              <img src={currentUser.cover_image_url} className="img-responsive img-thumbnail edit-avatar" />
              <span className="click-help-text">(Click to change)</span>
            </Upload>
          </div>
          <div className="col-md-9">
            <EditProfileForm updateUser={updateUser} errors={errors} user={currentUser} mode="edit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
