import React from 'react';
import EditProfileForm from './edit_profile_form';

const EditProfile = ({ currentUser, signup, errors }) => {

  return (
    <div className="container p-t-md">
      <div className="col-md-12 edit-profile">
        <div className="row">
          <div className="col-md-2">
            edit avatar
          </div>
          <div className="col-md-9">
            <EditProfileForm signup={signup} errors={errors} user={currentUser} mode="edit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
