export const fetchNotifications = (params = {}, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/notifications',
    data: params,
    success,
    error
  });
};
