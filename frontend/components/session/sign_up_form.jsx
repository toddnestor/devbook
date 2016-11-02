import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      username: '',
      email: '',
      email_confirmation: '',
      password: '',
      password_confirmation: '',
      birthday_month: '',
      birthday_day: 0,
      birthday_year: 0,
      gender: 0,
      errors: {}
    };
  }

  componentDidMount() {
    this.validateGlobalErrors(this.props.errors);
  }

  componentWillReceiveProps(nextProps) {
    this.validateGlobalErrors(nextProps.errors);
  }

  validateGlobalErrors(messages) {
    let errors = _.merge({}, this.state.errors);

    if(messages.indexOf('Email has already been taken') > -1) {
      errors.email = "Email has already been taken.";
    }

    if(messages.indexOf('Username has already been taken') > -1) {
      errors.username = "Username has already been taken.";
    }

    this.setState({errors});
  }

  validate(property, cb = () => {}) {
    let errors = _.merge({}, this.state.errors);

    switch(property) {
      case 'fname':
        if( !this.state.fname) {
          errors.fname = "First name is required.";
        } else if( !this.state.fname.match(/^[a-z0-9\.]{1,}$/i)) {
          errors.fname = "Only letters and numbers are allowed in your first name.";
        } else {
          errors.fname = null;
        }
        break;
      case 'lname':
        if( !this.state.lname) {
          errors.lname = "Last name is required.";
        } else if( !this.state.lname.match(/^[a-z0-9\.]{1,}$/i)) {
          errors.lname = "Only letters and numbers are allowed in your last name.";
        } else {
          errors.lname = null;
        }
        break;
      case 'username':
        if( !this.state.username) {
          errors.username = "Username is required.";
        } else if( !this.state.username.match(/^[a-z0-9\.]{1,}$/i)) {
          errors.username = "Only letters and numbers are allowed in your user name.";
        } else {
          errors.username = null;
        }
        break;
      case 'email':
        if( !this.state.email) {
          errors.email = "You must enter an e-mail address.";
        } else if( !this.state.email.match(/^[a-z0-9]{1}[a-z0-9\+\.\-\_]{1,}@[a-z0-9]{1}[a-z0-9\-]{1,}\.[a-z0-9\-]{2,}$/i)) {
          errors.email = "You must enter a valid email address.";
        } else {
          errors.email = null;
        }

        if( this.state.email_confirmation ) {
          if( this.state.email !== this.state.email_confirmation ) {
            errors.email_confirmation = "E-mail address and confirmation must match.";
          } else {
            errors.email_confirmation = null;
          }
        }
        break;
      case 'email_confirmation':
        if( !this.state.email_confirmation) {
          errors.email_confirmation = "You must confirm your e-mail address.";
        } else if ( this.state.email !== this.state.email_confirmation ) {
          errors.email_confirmation = "E-mail address and confirmation must match.";
        } else {
          errors.email_confirmation = null;
        }
        break;
      case 'password':
        if( !this.state.password ) {
          errors.password = "You must choose a password.";
        } else if (this.state.password.length < 6 ) {
          errors.password = "Your password must be at least six characters.";
        } else {
          errors.password = null;
        }
        break;
      case 'password_confirmation':
        if( !this.state.password_confirmation ) {
          errors.password_confirmation = "You must confirm your password";
        } else if ( this.state.password != this.state.password_confirmation ) {
          errors.password_confirmation = "Your password and confirmation must match.";
        } else {
          errors.password_confirmation = null;
        }
        break;
      case 'birthday_month':
      case 'birthday_day':
      case 'birthday_year':
        let { birthday_month, birthday_day, birthday_year } = this.state;
        if( !birthday_month || !birthday_day || !birthday_year ) {
          errors.birthday = "You must select a birthday.";
        } else {
          errors.birthday = null;
        }
        break;
      case 'gender':

        break;
    }

    this.setState({errors}, cb);
  }

  update(property) {
    return e => {
      this.setState({[property]: e.currentTarget.value}, () => this.validate(property));
    }
  }

  hasErrors() {
    let hasErrors = false;

    _.values(this.state.errors).forEach( error => {
      if( error ) {
        hasErrors = true;
      }
    });

    return hasErrors;
  }

  validateList(properties = [], cb) {
    if( properties.length < 1 ) {
      cb();
    } else {
      this.validate(properties[0], () => {
        this.validateList( properties.slice(1), cb );
      });
    }
  }

  validateAll(cb) {
    this.validateList(Object.keys(this.state), cb);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.validateAll(() => {
      if( !this.hasErrors() ) {
        let user = _.merge({}, this.state);
        user.birthday = new Date( this.state.birthday_year, this.state.birthday_month - 1, this.state.birthday_day);
        delete user.errors;
        delete user.birthday_month;
        delete user.birthday_day;
        delete user.birthday_year;
        this.props.signup(user);
      }
    });
  }

  months() {
    return {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec'
    };
  }

  monthDays() {
    let days = [];

    for(let i = 1; i <= 31; i++ ) {
      days.push(i);
    }

    return days;
  }

  years() {
    let years = [];
    const thisYear = new Date().getFullYear();

    for(let i = 0; i < 110; i++ ) {
      years.push( thisYear - i );
    }

    return years;
  }

  render() {
    let {errors} = this.state;

    return (
      <div className="sign-up-form">
        <h1>Sign Up</h1>
        <div className="subtitle">It's free for life</div>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className={errors['fname'] ? 'col-sm-6 form-group has-error' : 'col-sm-6 form-group'}>
              <input type="text" className="form-control" onChange={this.update('fname').bind(this)} value={this.state.fname} placeholder="First name" />
              <span className="help-block" style={{display: errors['fname'] ? 'block' : 'none'}}>{errors['fname']}</span>
            </div>
            <div className={errors['lname'] ? 'col-sm-6 form-group has-error' : 'col-sm-6 form-group'}>
              <input type="text" className="form-control" onChange={this.update('lname').bind(this)} value={this.state.lname} placeholder="Last name" />
              <span className="help-block" style={{display: errors['lname'] ? 'block' : 'none'}}>{errors['lname']}</span>
            </div>
            <div className={errors['username'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'}>
              <input type="text" className="form-control" onChange={this.update('username').bind(this)} value={this.state.username} placeholder="Username" />
              <span className="help-block" style={{display: errors['username'] ? 'block' : 'none'}}>{errors['username']}</span>
            </div>
            <div className={errors['email'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'}>
              <input type="text" className="form-control" onChange={this.update('email').bind(this)} value={this.state.email} placeholder="E-mail address" />
              <span className="help-block" style={{display: errors['email'] ? 'block' : 'none'}}>{errors['email']}</span>
            </div>
            <div className={errors['email_confirmation'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'}>
              <input type="text" className="form-control" onChange={this.update('email_confirmation').bind(this)} value={this.state.email_confirmation} placeholder="Confirm e-mail" />
              <span className="help-block" style={{display: errors['email_confirmation'] ? 'block' : 'none'}}>{errors['email_confirmation']}</span>
            </div>
            <div className={errors['password'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'}>
              <input type="password" className="form-control" onChange={this.update('password').bind(this)} value={this.state.password} placeholder="New password" />
              <span className="help-block" style={{display: errors['password'] ? 'block' : 'none'}}>{errors['password']}</span>
            </div>
            <div className={errors['password_confirmation'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'}>
              <input type="password" className="form-control" onChange={this.update('password_confirmation').bind(this)} value={this.state.password_confirmation} placeholder="Confirm password" />
              <span className="help-block" style={{display: errors['password_confirmation'] ? 'block' : 'none'}}>{errors['password_confirmation']}</span>
            </div>
            <div className={errors['birthday'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'}>
              <div className="birthday-label">Birthday</div>
              <div className="birthday-selector">
                <select onChange={this.update('birthday_month').bind(this)} value={this.state.birthday_month}>
                  <option value="0">Month</option>
                  {
                    Object.keys(this.months()).map( n => (
                      <option key={n} value={n}>{this.months()[n]}</option>
                    ))
                  }
                </select>
                <select onChange={this.update('birthday_day').bind(this)} value={this.state.birthday_day}>
                  <option value="0">Day</option>
                  {
                    this.monthDays().map( n => (
                      <option key={n} value={n}>{n}</option>
                    ))
                  }
                </select>
                <select onChange={this.update('birthday_year').bind(this)} value={this.state.birthday_year}>
                  <option value="0">Year</option>
                    {
                      this.years().map( n => (
                        <option key={n} value={n}>{n}</option>
                      ))
                    }
                </select>
              </div>
              <span className="help-block" style={{display: errors['birthday'] ? 'block' : 'none'}}>{errors['birthday']}</span>
            </div>
            <div className="col-sm-12 gender-selector">
              <label className="radio-inline">
                <input type="radio" value="male" onChange={this.update('gender').bind(this)} /> Male
                </label>
                <label className="radio-inline">
                  <input type="radio" value="female" onChange={this.update('gender').bind(this)} /> Female
                  </label>
                  <label className="radio-inline">
                    <input type="radio" value="other" onChange={this.update('gender').bind(this)} /> Other
                    </label>
                  </div>
                </div>
                <button disabled={this.hasErrors()} className="btn btn-success btn-lg green-button sign-up-button">Sign Up</button>
              </form>
            </div>
          )

  }
};

export default SignUpForm;
