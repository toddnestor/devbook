import React from 'react';
import DropdownIcon from '../../utilities/dropdown_icon';
import SweetAlert from 'sweetalert-react';
import Modal from 'react-modal';
import PostCreation from '../../feed/post_creation';

class StatusActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDelete: false,
      editStatus: false
    };
  }

  showEditStatus(e) {
    e.preventDefault();
    this.setState({editStatus: true});
  }

  showConfirmDelete(e) {
    e.preventDefault();
    this.setState({confirmDelete: true});
  }

  confirmDelete() {
    let { deleteStatus, activity } = this.props;
    this.setState({confirmDelete: false});
    deleteStatus( activity.feedable, activity );
  }

  closeModal() {
    this.setState({editStatus: false});
  }

  handleUpdateStatus(status, mediaItems) {
    let { updateStatus, activity } = this.props;

    activity.feedable.content = status.content;
    activity.feedable.media_item_ids = status.media_item_ids;
    activity.media_items = mediaItems;

    updateStatus(activity.feedable, activity);
    this.closeModal();
  }

  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    let { updateStatus, activity } = this.props;

    return (
      <DropdownIcon className="status-actions" content={<span className="icon icon-chevron-down"></span>}>
        <ul className="dropdown-menu media-list media-list-stream friend-requests">
          <li>
            <a onClick={this.showEditStatus.bind(this)}>
              Edit
            </a>
            <Modal
              isOpen={this.state.editStatus}
              onRequestClose={this.closeModal.bind(this)}
              style={customStyles}
              shouldCloseOnOverlayClick={true}>
              <PostCreation createStatus={this.handleUpdateStatus.bind(this)}
                            submitText="Update"
                            mediaItems={activity.media_items}
                            content={activity.feedable.content} />
            </Modal>
          </li>
          <li>
            <a onClick={this.showConfirmDelete.bind(this)}>
              Delete
            </a>
            <SweetAlert
              show={this.state.confirmDelete}
              title="Confirm delete"
              text="Do you really want to delete this status?"
              showCancelButton
              onConfirm={this.confirmDelete.bind(this)}
              onCancel={() => this.setState({confirmDelete: false})}
            />
          </li>
        </ul>
      </DropdownIcon>
    );
  }
}

export default StatusActions;
