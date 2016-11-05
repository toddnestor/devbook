import React from 'react';
import Nav from './nav';
import ZoomPhotoContainer from './utilities/zoom_photo_container';

const App = ({ children }) => (
  <div className="main-container">
    <Nav />
    { children }
    <ZoomPhotoContainer />
  </div>
);

export default App;
