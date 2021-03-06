export const allUsers = ({ users }) => _.values(users.users);

export const sortedUsers = state => {
  return allUsers(state).sort((a, b) => {
    if( a.lname < b.lname ) {
      return -1;
    } else if( a.lname < b.lname ) {
      return 1;
    } else {
      if( a.fname < b.fname ) {
        return -1;
      } else {
        return 1;
      }
    }
  });
}

export const allAlbums = ({ albums }) => _.values(albums);

export const sortedAlbums = state => {
  return allAlbums(state).sort((a, b) => {
    if( a.title < b.title ) {
      return -1;
    } else {
      return 1;
    }
  } );
}
