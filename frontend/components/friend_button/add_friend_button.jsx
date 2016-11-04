import React from 'react';
import DropdownButton from '../utilities/dropdown_button';

const AddFriendButton = ({ user, requestFriend, handleBlockUser }) => {

  const handleRequestFriend = e => {
    e.preventDefault();
    requestFriend(user);
  }

  return (
    <div className="btn-group">
      <button className="btn btn-primary-outline btn-sm" onClick={handleRequestFriend}>
        <span className="icon icon-add-user"></span>
         Friends
      </button>
      <DropdownButton className="btn btn-primary-outline btn-sm" buttonContent={<span className="icon icon-dots-three-horizontal"></span>}>
        <ul className="dropdown-menu">
          <li>
            <a href="#" onClick={handleBlockUser}>
              <span className="icon icon-block"></span> 
              Block
            </a>
          </li>
        </ul>
      </DropdownButton>
    </div>
  );
}

export default AddFriendButton;
