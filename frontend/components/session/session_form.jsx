import React from 'react';
import { Link } from 'react-router';
import SignUpForm from './sign_up_form';
import LoginForm from './login_form';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  render() {
    let { errors, login, signup } = this.props;

    return (
      <div className="sign-up-page">
        <nav className="navbar navbar-inverse navbar-fixed-top app-navbar">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="index.html">
                <img src="/assets/brand-white.png" alt="brand" />
              </a>
            </div>
            <div className="navbar-collapse collapse" id="navbar-collapse-main">
              <LoginForm login={login} />
            </div>
          </div>
        </nav>
        <div className="container p-t-md">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h2>Connect with developers and other geeks all around the world on DevBook.</h2>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="icon icon-images"></span> <strong>See photos and statuses</strong> from all of your developer friends.
                </div>
                <div className="feature-item">
                  <span className="icon icon-share"></span> <strong>Share what's new</strong> on your wall.
                </div>
                <div className="feature-item">
                  <span className="icon icon-documents"></span> <strong>Stay up to date</strong> and don't never miss out on an update.
                </div>
              </div>
            </div>
            <div className="col-md-offset-1 col-md-5 col-sm-12">
              <SignUpForm signup={signup} />
            </div>
          </div>
        </div>
        <footer>
          &copy; Devbook {new Date().getFullYear()} | Privacy | Careers
        </footer>
      </div>
    );
  }
}

export default SessionForm;
