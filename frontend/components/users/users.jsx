import React from 'react';
import ProfileCard from '../cards/profile_card';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    let { users, loading } = this.props;

    return (
      <div className="container m-y-md profile-photos">
        <div className="loading-parent" style={{display: loading ? 'block' : 'none'}}>
          <div className="loader"></div>
        </div>
        {
          users.map( user => (
            <div className="col-md-3" key={user.id}>
              <ProfileCard user={user} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default Users;
