import React from 'react';
import DropdownIcon from '../utilities/dropdown_icon';
import SweetAlert from 'sweetalert-react';
import Modal from 'react-modal';
import Textarea from 'react-textarea-autosize';
import Upload from '../utilities/upload';

class StatusActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDelete: false,
      editComment: false
    };
  }

  showEditStatus(e) {
    e.preventDefault();
    this.setState({editComment: true});
  }

  showConfirmDelete(e) {
    e.preventDefault();
    this.setState({confirmDelete: true});
  }

  confirmDelete() {
    let { deleteComment, comment } = this.props;
    this.setState({confirmDelete: false});
    deleteComment( comment );
  }

  closeModal() {
    this.setState({editComment: false});
  }

  handleUpdateComment(comment, mediaItems) {
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
      <DropdownIcon className="comment-actions" content={<span className="icon icon-chevron-down"></span>}>
        <ul className="dropdown-menu media-list media-list-stream friend-requests">
          <li>
            <a onClick={this.showEditStatus.bind(this)}>
              Edit
            </a>
            <Modal
              isOpen={this.state.editComment}
              onRequestClose={this.closeModal.bind(this)}
              style={customStyles}
              shouldCloseOnOverlayClick={true}>
              
            </Modal>
          </li>
          <li>
            <a onClick={this.showConfirmDelete.bind(this)}>
              Delete
            </a>
            <SweetAlert
              show={this.state.confirmDelete}
              title="Confirm delete"
              text="Do you really want to delete this comment?"
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
