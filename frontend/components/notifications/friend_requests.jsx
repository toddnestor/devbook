import React from 'react';
import DropdownIcon from '../utilities/dropdown_icon';
import { Link } from 'react-router';

const FriendRequests = ({ requestedFriends, acceptFriendRequest, denyFriendRequest }) => {

  const handleDenyFriendRequest = user => e => {
    e.preventDefault();
    e.stopPropagation();
    denyFriendRequest(user);
  }

  const handleAcceptFriendRequest = user => e => {
    e.preventDefault();
    e.stopPropagation();
    acceptFriendRequest(user);
  }

  const displayRequests = () => {
    return requestedFriends.map( request => (
      <li key={request.id} className="media m-b clearfix">
        <Link to={`/${request.user.username}`} className="media-left pull-left">
          <img className="media-object img-circle" src={request.user.avatar_url} />
        </Link>
        <div className="pull-left" style={{width: 'inherit'}}>
          <Link to={`/${request.user.username}`} className="friend-name" style={{color: '#000'}}>
            <strong>{request.user.fname} {request.user.lname}</strong>
          </Link>
        </div>
        <div className="pull-left">
          <button onClick={handleAcceptFriendRequest(request.user)} className="btn btn-success-outline btn-xs">
            Accept
          </button>
          <button onClick={handleDenyFriendRequest(request.user)} className="btn btn-danger-outline btn-xs" style={{marginLeft: '5px'}}>
            Deny
          </button>
        </div>
      </li>
    ))
  }

  return (
    <DropdownIcon notificationCount={requestedFriends ? requestedFriends.length : 0} className="app-notifications" content={<span className="icon icon-users"></span>}>
      <ul className="dropdown-menu media-list media-list-stream friend-requests">
        {requestedFriends ? displayRequests() : ''}
        <li style={{display: !requestedFriends || !requestedFriends.length ? 'list-item' : 'none'}}>
          <a>
            No requests at this time
          </a>
        </li>
      </ul>
    </DropdownIcon>
  );
}

export default FriendRequests;
