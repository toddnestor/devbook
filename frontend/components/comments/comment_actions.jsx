import React from 'react';
import DropdownIcon from '../utilities/dropdown_icon';
import SweetAlert from 'sweetalert-react';
import Modal from 'react-modal';
import CommentForm from './comment_form';

class CommentActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDelete: false,
      editComment: false
    };
  }

  showEditComment(e) {
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

  handleUpdateComment(updatedComment, mediaItem) {
    let { updateComment, comment } = this.props;

    updatedComment.id = this.props.comment.id;
    updateComment(updatedComment);

    this.closeModal();
  }

  render() {
    let { updateComment, comment, currentUser } = this.props;

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

    return (
      <DropdownIcon className="comment-actions" content={<span className="icon icon-chevron-down"></span>}>
        <ul className="dropdown-menu media-list media-list-stream friend-requests">
          <li>
            <a onClick={this.showEditComment.bind(this)}>
              Edit
            </a>
            <Modal
              isOpen={this.state.editComment}
              onRequestClose={this.closeModal.bind(this)}
              style={customStyles}
              shouldCloseOnOverlayClick={true}>
              <CommentForm text={comment.text}
                           mediaItem={comment.media_items[0]}
                           createComment={this.handleUpdateComment.bind(this)}
                           user={currentUser} />
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
              buttonText="Update"
              onCancel={() => this.setState({confirmDelete: false})}
            />
          </li>
        </ul>
      </DropdownIcon>
    );
  }
}

export default CommentActions;
