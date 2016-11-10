export const createAlbum = (album, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/albums',
    data: {album},
    success,
    error
  });
};

export const updateAlbum = (album, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/albums/${album.id}`,
    data: {album},
    success,
    error
  });
};

export const destroyAlbum = (album, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/albums/${album.id}`,
    success,
    error
  });
};

export const fetchAlbum = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/albums/${id}`,
    success,
    error
  });
};

export const fetchAlbums = (userId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/albums`,
    success,
    error
  });
};

export const fetchMyAlbums = (success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/albums`,
    success,
    error
  });
};
