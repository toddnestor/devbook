import React from 'react';
import AddFriendButton from './add_friend_button';
import RequestedFriendButton from './requested_friend_button';
import PendingFriendButton from './pending_friend_button';
import BlockedFriendButton from './blocked_friend_button';
import AcceptedFriendButton from './accepted_friend_button';

const FriendButton = ({ currentUser,
                        requestFriend,
                        cancelRequest,
                        blockUser,
                        unBlockUser,
                        unfriendUser,
                        acceptFriendRequest,
                        denyFriendRequest,
                        user,
                        style = {}}) => {

  const handleBlockUser = e => {
    e.preventDefault();
    blockUser(user);
  }

  const displayButton = ()  => {
    switch(user.friend_status) {
      case 'none':
        return <AddFriendButton style={style} user={user} requestFriend={requestFriend} handleBlockUser={handleBlockUser} />
      case 'requested':
        return <RequestedFriendButton style={style} user={user} denyFriendRequest={denyFriendRequest} acceptFriendRequest={acceptFriendRequest} handleBlockUser={handleBlockUser} />
      case 'pending':
        return <PendingFriendButton style={style} user={user} cancelRequest={cancelRequest} handleBlockUser={handleBlockUser} />
      case 'blocked':
        return <BlockedFriendButton style={style} user={user} unBlockUser={unBlockUser} />
      case 'accepted':
        return <AcceptedFriendButton style={style} user={user} unfriendUser={unfriendUser} handleBlockUser={handleBlockUser} />
    }

    return <span style={{display: 'none'}}></span>;
  }

  return displayButton();
}

export default FriendButton;
