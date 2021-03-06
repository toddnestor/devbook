import React from 'react';
import Textarea from 'react-textarea-autosize';
import { Link } from 'react-router';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = _.merge({}, this.props.user);
    this.state.avatar_url = this.props.avatar_url;
    this.state.cover_image_url = this.props.cover_image_url;
    this.state.errors = {};
    this.state.password = '';
    this.state.password_confirmation = '';
    this.state.editingTab = 'details';

    if( this.state.birthday ) {
      let birthday = new Date(this.props.user.birthday);
      this.state.birthday_month = birthday.getMonth() + 1;
      this.state.birthday_day = birthday.getDay() + 1;
      this.state.birthday_year = birthday.getFullYear();
      }
  }

  componentDidMount() {
    this.validateGlobalErrors(this.props.errors);
  }

  componentWillReceiveProps(nextProps) {
    this.validateGlobalErrors(nextProps.errors);
    this.setState({
      avatar_url: nextProps.avatar_url,
      cover_image_url: nextProps.cover_image_url
    });
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
    //needs refactored, this wasn't a clean way
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
        break;
      case 'password':
        if (this.state.password && this.state.password.length < 6 ) {
          errors.password = "Your password must be at least six characters.";
        } else {
          errors.password = null;
        }
        break;
      case 'password_confirmation':
        if ( this.state.password != this.state.password_confirmation ) {
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
        if( !user.password ) {
          delete user.password;
          delete user.password_confirmation;
        }
        this.props.updateUser(user);
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

  updateTab(tab) {
    return e => {
      e.preventDefault();
      this.setState({editingTab: tab});
    }
  }

  render() {
    let {errors, editingTab} = this.state;
    let { profileLink } = this.props;

    return (
      <div className="sign-up-form">
        <h1>Update Profile</h1>
        <div className="subtitle"> </div>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul className="nav nav-tabs">
            <li className={editingTab == 'details' ? 'active' : ''} onClick={this.updateTab('details').bind(this)}>
              <a href="#">Personal Details</a>
            </li>
            <li className={editingTab == 'intro' ? 'active' : ''} onClick={this.updateTab('intro').bind(this)}>
              <a href="#">Introduction</a>
            </li>
            <li className={editingTab == 'locations' ? 'active' : ''} onClick={this.updateTab('locations').bind(this)}>
              <a href="#">Locations</a>
            </li>
            <li className={editingTab == 'account' ? 'active' : ''} onClick={this.updateTab('account').bind(this)}>
              <a href="#">Account</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className={editingTab == 'details' ? "tab-pane fade in active" : "tab-pane fade"}>
              <div className="row">
                <div className={errors['fname'] ? 'col-sm-6 form-group has-error' : 'col-sm-6 form-group'}>
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" className="form-control" onChange={this.update('fname').bind(this)} value={this.state.fname} placeholder="First name" />
                  <span className="help-block" style={{display: errors['fname'] ? 'block' : 'none'}}>{errors['fname']}</span>
                </div>
                <div className={errors['lname'] ? 'col-sm-6 form-group has-error' : 'col-sm-6 form-group'}>
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" className="form-control" onChange={this.update('lname').bind(this)} value={this.state.lname} placeholder="Last name" />
                  <span className="help-block" style={{display: errors['lname'] ? 'block' : 'none'}}>{errors['lname']}</span>
                </div>
                <div className={errors['birthday'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'}>
                  <label>Birthday</label>
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
                <div className="col-sm-12 form-group">
                  <label htmlFor="relationship_status">Relationship Status</label>
                  <input id="relationship_status" type="text" className="form-control" onChange={this.update('relationship_status').bind(this)} value={this.state.relationship_status} placeholder="Relationship Status..." />
                </div>
                <div className="col-sm-12 gender-selector">
                  <label style={{display: 'block'}}>Gender</label>
                  <label className="radio-inline">
                    <input type="radio" checked={this.state.gender == 'male'} value="male" onChange={this.update('gender').bind(this)} /> Male
                  </label>
                  <label className="radio-inline">
                    <input type="radio" checked={this.state.gender == 'female'} value="female" onChange={this.update('gender').bind(this)} /> Female
                  </label>
                  <label className="radio-inline">
                    <input type="radio" checked={this.state.gender == 'other'} value="other" onChange={this.update('gender').bind(this)} /> Other
                  </label>
                </div>
              </div>
            </div>
            <div className={editingTab == 'intro' ? "tab-pane fade in active" : "tab-pane fade"}>
              <div className="row">
                <div className="col-sm-12 form-group">
                  <label htmlFor="tagline">Tagline</label>
                  <input id="tagline" type="text" className="form-control" onChange={this.update('tagline').bind(this)} value={this.state.tagline} placeholder="Tagline" />
                </div>
                <div className="col-sm-12 form-group">
                  <label htmlFor="intro">Intro</label>
                  <Textarea id="intro" className="form-control" onChange={this.update('intro').bind(this)} value={this.state.intro} placeholder="Intro..."></Textarea>
                </div>
              </div>
            </div>
            <div className={editingTab == 'locations' ? "tab-pane fade in active" : "tab-pane fade"}>
              <div className="row">
                <div className="col-sm-12 form-group">
                  <label htmlFor="hometown">Hometown</label>
                  <input type="text" id="hometown" className="form-control" onChange={this.update('hometown').bind(this)} value={this.state.hometown} placeholder="Hometown" />
                </div>
                <div className="col-sm-12 form-group">
                  <label htmlFor="works_at">Works at</label>
                  <input id="works_at" type="text" className="form-control" onChange={this.update('works_at').bind(this)} value={this.state.works_at} placeholder="Works at..." />
                </div>
                <div className="col-sm-12 form-group">
                  <label htmlFor="lives_at">Lives at</label>
                  <input id="lives_at" type="text" className="form-control" onChange={this.update('lives_at').bind(this)} value={this.state.lives_at} placeholder="Lives at..." />
                </div>
              </div>
            </div>
            <div className={editingTab == 'account' ? "tab-pane fade in active" : "tab-pane fade"}>
              <div className="row">
                <div className={errors['username'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'}>
                  <label htmlFor="username">Username</label>
                  <input htmlFor="username" type="text" className="form-control" onChange={this.update('username').bind(this)} value={this.state.username} placeholder="Username" />
                  <span className="help-block" style={{display: errors['username'] ? 'block' : 'none'}}>{errors['username']}</span>
                </div>
                <div className={errors['email'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'}>
                  <label htmlFor="email">E-mail</label>
                  <input id="email" type="text" className="form-control" onChange={this.update('email').bind(this)} value={this.state.email} placeholder="E-mail address" />
                  <span className="help-block" style={{display: errors['email'] ? 'block' : 'none'}}>{errors['email']}</span>
                </div>
                <div className={errors['password'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'}>
                  <label htmlFor="password">New Password</label>
                  <input id="password" type="password" className="form-control" onChange={this.update('password').bind(this)} value={this.state.password} placeholder="New password" />
                  <span className="help-block text-info">Leave blank to keep current password</span>
                  <span className="help-block" style={{display: errors['password'] ? 'block' : 'none'}}>{errors['password']}</span>
                </div>
                <div className={errors['password_confirmation'] ? 'col-sm-12 form-group has-error' : 'col-sm-12 form-group'} style={{display: this.state.password ? 'block' : 'none'}}>
                  <label htmlFor="password_confirmation">Confirm Password</label>
                  <input id="password_confirmation" type="password" className="form-control" onChange={this.update('password_confirmation').bind(this)} value={this.state.password_confirmation} placeholder="Confirm password" />
                  <span className="help-block" style={{display: errors['password_confirmation'] ? 'block' : 'none'}}>{errors['password_confirmation']}</span>
                </div>
              </div>
            </div>
          </div>
          <button disabled={this.hasErrors()} className="btn btn-success btn-lg green-button sign-up-button">Update Profile</button>
          <Link to={`/${this.state.username}`} style={{display: profileLink ? 'inline-block' : 'none'}} className="btn btn-primary-outline btn-sm view-profile-btn">
            View Profile
          </Link>
        </form>
      </div>
    );
  }
};

export default EditProfileForm;
