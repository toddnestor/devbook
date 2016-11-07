import React from 'react';
import DropdownIcon from '../../utilities/dropdown_icon';
import SweetAlert from 'sweetalert-react';

class StatusActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDelete: false
    };
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

  render() {
    return (
      <DropdownIcon className="status-actions" content={<span className="icon icon-chevron-down"></span>}>
        <ul className="dropdown-menu media-list media-list-stream friend-requests">
          <li className="hidden">
            <a>
              Edit
            </a>
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
