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
      birthday_day: '',
      birthday_year: '',
      gender: ''
    };
  }

  update(property) {
    return e => {
      this.setState({[property]: e.currentTarget.value});
    }
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

    return (
      <div className="sign-up-form">
        <h1>Sign Up</h1>
        <div className="subtitle">It's free for life</div>

        <form>
          <div className="row">
            <div className="col-sm-6">
              <input type="text" className="form-control" onChange={this.update('fname').bind(this)} value={this.state.fname} placeholder="First name" />
            </div>
            <div className="col-sm-6">
              <input type="text" className="form-control" onChange={this.update('lname').bind(this)} value={this.state.lname} placeholder="Last name" />
            </div>
            <div className="col-sm-12">
              <input type="text" className="form-control" onChange={this.update('username').bind(this)} value={this.state.username} placeholder="Username" />
            </div>
            <div className="col-sm-12">
              <input type="text" className="form-control" onChange={this.update('email').bind(this)} value={this.state.email} placeholder="E-mail address" />
            </div>
            <div className="col-sm-12">
              <input type="text" className="form-control" onChange={this.update('email_confirmation').bind(this)} value={this.state.email_confirmation} placeholder="Confirm e-mail" />
            </div>
            <div className="col-sm-12">
              <input type="password" className="form-control" onChange={this.update('password').bind(this)} value={this.state.password} placeholder="New password" />
            </div>
            <div className="col-sm-12">
              <input type="password" className="form-control" onChange={this.update('password_confirmation').bind(this)} value={this.state.password_confirmation} placeholder="Confirm password" />
            </div>
            <div className="col-sm-12">
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
                  <option value="0" selected="1">Day</option>
                  {
                    this.monthDays().map( n => (
                      <option key={n} value={n}>{n}</option>
                    ))
                  }
                </select>
                <select onChange={this.update('birthday_year').bind(this)} value={this.state.birthday_year}>
                  <option value="0" selected="1">Year</option>
                    {
                      this.years().map( n => (
                        <option key={n} value={n}>{n}</option>
                      ))
                    }
                </select>
              </div>
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
                <button className="btn btn-success btn-lg green-button sign-up-button">Sign Up</button>
              </form>
            </div>
          )

  }
};

export default SignUpForm;
