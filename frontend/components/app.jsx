import React from 'react';
import Nav from './nav';

const App = ({ children }) => (
  <div className="main-container">
    <Nav />
    { children }
  </div>
);

export default App;
