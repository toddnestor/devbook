import React from 'react';
import DropdownButton from '../utilities/dropdown_button';

const RequestedFriendButton = ({ user, denyFriendRequest, acceptFriendRequest, handleBlockUser }) => {

  const handleDenyFriendRequest = e => {
    e.preventDefault();
    denyFriendRequest(user);
  }

  const handleAcceptFriendRequest = e => {
    e.preventDefault();
    acceptFriendRequest(user);
  }

  return (
    <DropdownButton className="btn btn-info-outline btn-sm" buttonContent={<span><span className="icon icon-add-user"></span> Respond to Request <span className="caret"></span></span>}>
      <ul className="dropdown-menu">
        <li>
          <a href="#" onClick={handleAcceptFriendRequest}>
            <span className="icon icon-add-user"></span>
            Accept
          </a>
        </li>
        <li>
          <a href="#" onClick={handleDenyFriendRequest}>
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
