import React from 'react';
import EditProfileForm from './edit_profile_form';
import Upload from '../utilities/upload';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.displayProfileLink = false;

    this.state = _.merge({}, {
      avatar_url: this.props.currentUser.avatar_url,
      cover_image_url: this.props.currentUser.cover_image_url
    });
  }

  componentWillReceiveProps(newProps) {
    if( newProps.currentUser.saved ) {
      this.displayProfileLink = true;
    }
  }

  afterAvatarUpload(files) {
    let file = files[0];
    this.setState({avatar_url: file.urls.avatar});
  }

  afterCoverImageUpload(files) {
    let file = files[0];
    this.setState({cover_image_url: file.urls.large});
  }

  dismissSaved(e) {
    e.preventDefault();
    this.props.confirmSaved();
  }

  render() {
    let { currentUser, updateUser, errors } = this.props;

    return (
      <div className="container p-t-md">
        <div className="col-md-12 edit-profile">
          <div className="row">
            <div className="col-md-2">
              <h3>Avatar</h3>
              <Upload callback={this.afterAvatarUpload.bind(this)} multiple={false}>
                <img src={this.state.avatar_url} className="img-responsive img-thumbnail edit-avatar" />
                <span className="click-help-text">(Click to change)</span>
              </Upload>
              <h3>Cover Image</h3>
              <Upload callback={this.afterCoverImageUpload.bind(this)} multiple={false}>
                <img src={this.state.cover_image_url} className="img-responsive img-thumbnail edit-avatar" />
                <span className="click-help-text">(Click to change)</span>
              </Upload>
            </div>
            <div className="col-md-9">
              <div className="alert alert-success alert-dismissible" style={{display: currentUser.saved ? 'block' : 'none'}}>
                <button type="button" className="close" onClick={this.dismissSaved.bind(this)}>
                  <span>&times;</span>
                </button>
                <strong>Success!</strong> Your profile was saved.
              </div>
              <EditProfileForm updateUser={updateUser} avatar_url={this.state.avatar_url} cover_image_url={this.state.cover_image_url} errors={errors} user={currentUser} profileLink={this.displayProfileLink} mode="edit" />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default EditProfile;
