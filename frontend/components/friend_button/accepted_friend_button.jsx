import React from 'react';
import DropdownButton from '../utilities/dropdown_button';

const AcceptedFriendButton = ({ user, unfriendUser, handleBlockUser }) => {

  const handleUnfriendUser = e => {
    e.preventDefault();
    unfriendUser(user);
  }

  return (
    <DropdownButton className="btn btn-success-outline btn-sm" buttonContent={<span><span className="icon icon-check"></span> Friends <span className="caret"></span></span>}>
      <ul className="dropdown-menu">
        <li>
          <a href="#" onClick={handleUnfriendUser}>
            <span className="icon icon-remove-user"></span>
            Unfriend {user.fname}
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

export default AcceptedFriendButton;
