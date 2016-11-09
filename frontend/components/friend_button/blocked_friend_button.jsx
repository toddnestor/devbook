import React from 'react';
import DropdownButton from '../utilities/dropdown_button';

const BlockedFriendButton = ({ user, unBlockUser }) => {

  const handleUnBlockUser = e => {
    e.preventDefault();
    unBlockUser(user);
  }

  return (
    <DropdownButton className="btn btn-danger-outline btn-sm friend-button" buttonContent={<span><span className="icon icon-block"></span> Blocked <span className="caret"></span></span>}>
      <ul className="dropdown-menu">
        <li>
          <a href="#" onClick={handleUnBlockUser}>
            <span className="icon icon-remove-user"></span>
            Unblock {user.fname}
          </a>
        </li>
      </ul>
    </DropdownButton>
  );
}

export default BlockedFriendButton;
