import React from 'react';

const Notification = ({ children }) => (
  <div className="alert alert-warning alert-dismissible hidden-xs">
    { children }
  </div>
);

export default Notification;
