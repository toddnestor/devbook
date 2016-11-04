import React from 'react';
import DropdownButton from '../utilities/dropdown_button';

const RequestedFriendButton = ({ user, cancelRequest, handleBlockUser }) => {

  const handleCancelRequest = e => {
    e.preventDefault();
    cancelRequest(user);
  }

  return (
    <DropdownButton className="btn btn-warning-outline btn-sm" buttonContent={<span><span className="icon icon-check"></span> Requested <span className="caret"></span></span>}>
      <ul className="dropdown-menu">
        <li>
          <a href="#" onClick={handleCancelRequest}>
            <span className="icon icon-remove-user"></span>
            Cancel Request
          </a>
        </li>
        <li>
          <a href="#" onClick={handleBlockUser}>
            <span className="icon icon-block"></span>
            Block
          </a>
        </li>
      </ul>
    </DropdownButton>
  );
}

export default RequestedFriendButton;
