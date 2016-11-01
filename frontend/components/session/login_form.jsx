import React from 'react';

const LoginForm = props => {

  return (
    <form className="navbar-form navbar-right app-search" role="search">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="E-mail" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <button className="btn btn-success btn-sm">Log In</button>
      <button className="btn btn-warning btn-sm">Demo</button>
    </form>
  )
};

export default LoginForm;
