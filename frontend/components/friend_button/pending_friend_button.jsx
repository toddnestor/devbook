import React from 'react';
import DropdownButton from '../utilities/dropdown_button';

const PendingFriendButton = ({ user, cancelRequest, handleBlockUser, style = {} }) => {

  const handleCancelRequest = e => {
    e.preventDefault();
    cancelRequest(user);
  }

  return (
    <DropdownButton style={style} className="btn btn-warning-outline btn-sm friend-button" buttonContent={<span><span className="icon icon-check"></span> Requested <span className="caret"></span></span>}>
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

export default PendingFriendButton;
