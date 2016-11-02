import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  update(property) {
    return e => {
      this.setState({[property]: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <form className="navbar-form navbar-right app-search" role="search" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" onChange={this.update('email').bind(this)} value={this.state.email} placeholder="E-mail" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" onChange={this.update('password').bind(this)} value={this.state.password} placeholder="Password" />
        </div>
        <button className="btn btn-success btn-sm">Log In</button>
        <button className="btn btn-warning btn-sm">Demo</button>
      </form>
    );
  }
}

export default LoginForm;
