export const fetchPhotos = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/albums/${id}/photos`,
    success,
    error
  });
}
